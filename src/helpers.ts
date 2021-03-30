import _ from "lodash";
import * as fs from "fs";
import { WriteStream } from "node:fs";
import { isPlural, singular } from "pluralize";

export const CLASS_TYPE = "rdfs:Class";
export const PROPERTY_TYPE = "rdf:Property";
export const ENUM_TYPE = "schema:Enumeration";
export const DATATYPE_TYPE = "schema:DataType";
export const BOOLEAN_TYPE = "schema:Boolean";
export const SUPERSEDED_BY = "schema:supersededBy";
export const SOURCE_TYPE = "schema:source";
export const ITEM_LIST_ID = "schema:ItemList";
export const LIST_ITEM_ID = "schema:ListItem";
export const DATAFEED_ID = "schema:DataFeed";
export const DATAFEED_ITEM_ID = "schema:DataFeedItem";

export const GENERIC_TYPES = new Set([
  ITEM_LIST_ID,
  LIST_ITEM_ID,
  DATAFEED_ID,
  DATAFEED_ITEM_ID,
]);

export type PointerType = {
  "@id": string;
};

export type SchemaType = {
  "@type": string | Array<string>;
  "@id": string;
  "schema:isPartOf"?: PointerType;
  "rdfs:comment"?:
    | string
    | {
        "@language": string;
        "@value": string;
      };
  "rdfs:label":
    | string
    | {
        "@language": string;
        "@value": string;
      };
  "schema:domainIncludes"?: PointerType | Array<PointerType>;
  "schema:source": PointerType | Array<PointerType>;
  "rdfs:subClassOf"?: PointerType | Array<PointerType>;
  "schema:rangeIncludes"?: PointerType | Array<PointerType>;
  "schema:supersededBy": PointerType;
};

export type SchemaWithProps = SchemaType & {
  props: {
    [id: string]: string;
  };
};

export const getMeta = _.curryRight(
  (item: SchemaType, prop: "rdfs:label" | "rdfs:comment") => {
    return typeof item[prop] == "object"
      ? // @ts-ignore
        item[prop]["@value"]
      : item[prop];
  }
);

export const getLabel = getMeta("rdfs:label");
export const getComment = getMeta("rdfs:comment");

export const renderComment = (ws: WriteStream, schema: SchemaType) => {
  ws.write(`/**\r\n`);
  ws.write(`*\r\n`);
  ws.write(`* @see @link https://schema.org/${getLabel(schema)}\r\n`);
  ws.write(`*\r\n`);
  ws.write(`* @remarks\r\n`);
  if (schema["rdfs:comment"]) {
    const comment: string = getComment(schema);
    ws.write(`* ${comment}\r\n`);
    ws.write(`*\r\n`);
  }
  if (schema["schema:isPartOf"]) {
    ws.write(`* \r\n`);
    const isPartOf = schema["schema:isPartOf"]["@id"];
    ws.write(`* Partof: ${isPartOf}\r\n`);
  }
  if (schema[SOURCE_TYPE]) {
    const sourceContents = schema[SOURCE_TYPE];
    if (Array.isArray(sourceContents)) {
      sourceContents.forEach((v) => {
        ws.write(`* @see @link ${v["@id"]}\r\n`);
      });
    } else {
      ws.write(`* @see @link ${sourceContents["@id"]}\r\n`);
    }
    ws.write(`*\r\n`);
  }
  ws.write(`**\/\r\n`);
};

export const toObject = (schemas: Array<SchemaType>) =>
  schemas.reduce(
    (acc, item) => ({
      ...acc,
      [item["@id"]]: item,
    }),
    {}
  );

export const getUniqueProps = (
  coll: Array<SchemaType>,
  colName: keyof SchemaType
) => {
  const uniqValues = new Set(coll.map((item) => item[colName]));

  return uniqValues;
};

export const isDataType = (item: SchemaType) =>
  Array.isArray(item["@type"])
    ? _.includes(item["@type"], "schema:DataType")
    : item["@type"] === "schema:DataType";

export const getDataTypes = (coll: Array<SchemaType>) =>
  coll.filter(isDataType);

export const getNonDataTypes = (coll: Array<SchemaType>) =>
  coll.filter(_.negate(isDataType));

export const getNonProperties = (coll: Array<SchemaType>) =>
  coll.filter((item) => item["@type"] !== PROPERTY_TYPE);

export const isEnum = (schemaMap: { [id: string]: SchemaType }) => (
  item: SchemaType
): boolean => {
  if (item["rdfs:subClassOf"]) {
    const propValue = item["rdfs:subClassOf"];
    const superClasses = Array.isArray(propValue) ? propValue : [propValue];
    superClasses.forEach((classItem) => {
      const id = classItem["@id"];
      if (id == ENUM_TYPE) {
        return true;
      } else {
        if (schemaMap[id]) {
          return isEnum(schemaMap)(schemaMap[id]);
        }
      }
    });
  } else {
    return false;
  }
  return false;
};

export const getEnumSubClasses = (coll: Array<SchemaType>) => {
  const schemaMap = toObject(coll);
  return coll.filter(isEnum(schemaMap));
};

export const getNonEnumSubs = (coll: Array<SchemaType>) => {
  const schemaMap = toObject(coll);
  return coll.filter(_.negate(isEnum(schemaMap)));
};

export const getClasses = (coll: Array<SchemaType>) =>
  coll
    .filter((item) => item["@type"] === CLASS_TYPE)
    .filter((item) => item["@id"] !== "schema:DataType");

export const getNonClasses = (coll: Array<SchemaType>) =>
  coll.filter((item) => item["@type"] !== CLASS_TYPE);

// write data types
export const writeDataTypes = async (dataTypes: Array<SchemaType>) => {
  const ws = fs.createWriteStream(`${__dirname}/../types/core.d.ts`, {
    encoding: "utf-8",
    autoClose: true,
    flags: "w+",
  });
  dataTypes.forEach((item) => {
    let rawType = null;
    switch (item["rdfs:label"]) {
      case "Number":
        rawType = "number";
        break;
      case "Boolean":
        rawType = "boolean";
        break;
      default:
        rawType = "string";
    }
    renderComment(ws, item);
    ws.write(`export type ${getLabel(item)} = ${rawType};\r\n `);
    ws.write(`\r\n`);
  });
  ws.end();
};

export const getTypeScriptSafeLabel = (label: string) => {
  if (label.length > 0) {
    //@ts-ignore
    if (isNaN(label[0])) {
      return label;
    } else {
      return `Interface${label}`;
    }
  } else {
    return label;
  }
};

// Re-exporting
export const reExport = (moduleName: string, append: boolean = true) => {
  if (append) {
  }
  const indexFile = fs.openSync(
    `${__dirname}/../types/index.d.ts`,
    append ? "a" : "w"
  );
  fs.writeFileSync(
    `${__dirname}/../types/index.d.ts`,
    `export * from "./${moduleName}";\r\n`,
    {
      flag: append ? "a" : "w",
      encoding: "utf-8",
    }
  );
};

export const assignPropsToInterfaces = (
  classes: { [id: string]: SchemaType },
  properties: { [id: string]: SchemaType },
  allSchema: { [id: string]: SchemaType }
) => {
  let classTypes: {
    [id: string]: SchemaWithProps;
  } = Object.entries(classes).reduce((acc, [id, item]) => {
    return {
      ...acc,
      [id]: {
        ...item,
        props: {},
      },
    };
  }, {});

  Object.entries(properties)
    .sort(([_, a], [__, b]) => getLabel(a).localeCompare(getLabel(b)))
    .forEach(([id, schema]) => {
      if (id == SUPERSEDED_BY) {
        // no need for this now.
        return;
      }
      if (schema["schema:domainIncludes"]) {
        const domains = Array.isArray(schema["schema:domainIncludes"])
          ? schema["schema:domainIncludes"]
          : [schema["schema:domainIncludes"]];

        domains.forEach((value) => {
          const propLabel = getLabel(schema);
          let isPluralProp = false;
          if (isPlural(propLabel)) {
            const singularLabel = singular(propLabel);
            // console.log(classTypes[value["@id"]]!.props)
            // console.log([
            //   propLabel,
            //   singularLabel,
            //   value["@id"],
            //   _.has(classTypes[value["@id"]]!.props, singularLabel),
            // ]);
            if (_.has(classTypes[value["@id"]]!.props, singularLabel)) {
              isPluralProp = true;
            }
          }
          classTypes[value["@id"]]!.props[propLabel] = getRangeString(
            allSchema,
            schema["schema:rangeIncludes"] as PointerType | Array<PointerType>,
            isPluralProp
          );
        });
      }
    });

  return classTypes;
};

export const reExportCoreTypes = (
  ws: WriteStream,
  dataTypes: SchemaType[],
  schemaMap: { [id: string]: SchemaType }
) => {
  ws.write(
    `import { ${_.join(
      dataTypes.map((item) => getLabel(item)),
      ", "
    )} } from "./core";\r\n`
  );
  ws.write(
    `import { ${_.join(
      Array.from(GENERIC_TYPES).map((item) => getLabel(schemaMap[item])),
      ", "
    )} } from "./generics";\r\n`
  );
  ws.write(`\r\n`);
  // re export
  ws.write(`export * from "./core";\r\n\r\n`);
  ws.write(`export * from "./generics";\r\n\r\n`);
  // * render datatype enum
  ws.write(
    `export type DataType = ${_.join(
      dataTypes.map((item) => getLabel(item)),
      " | "
    )};\r\n\r\n`
  );
};

export const renderEnums = (
  ws: WriteStream,
  singles: _.Dictionary<SchemaType[]>,
  schemaMap: { [id: string]: SchemaType }
) => {
  Object.keys(singles)
    .sort()
    .forEach((id: string) => {
      const singleEnumItems = singles[id].map((item) => getLabel(item)).sort();
      const singleParent = getLabel(schemaMap[id]);
      renderComment(ws, schemaMap[id]);
      ws.write(`export type ${singleParent} =\r\n`);
      singleEnumItems.forEach((val, index, arr) => {
        ws.write(`  | "${val}"\r\n${index == arr.length - 1 ? ";" : ""}`);
      });
      ws.write(`\r\n`);
    });
};

const typeOmitted = (label: string) => `Omit<${label}, '@type'>`;

export const renderInterfaces = (
  ws: WriteStream,
  withProperties: {
    [id: string]: SchemaWithProps;
  },
  enumMembers: _.Dictionary<SchemaType[]>,
  dataTypesMap: {
    [id: string]: SchemaType;
  },
  schemaMap: { [id: string]: SchemaType }
) => {
  const DONT_RENDER = new Set([DATATYPE_TYPE, ...GENERIC_TYPES]);
  Object.entries(withProperties)
    .sort(([_, a], [__, b]) => getLabel(a).localeCompare(getLabel(b)))
    .forEach(([id, schema]) => {
      if (DONT_RENDER.has(id)) {
        return;
      }
      if (enumMembers[id]) {
        // do not render enums
        return;
      } else {
        renderComment(ws, schema);
        if (schema["rdfs:subClassOf"]) {
          const subClassInfo = schema["rdfs:subClassOf"];
          if (
            !Array.isArray(subClassInfo) &&
            dataTypesMap[subClassInfo["@id"]]
          ) {
            ws.write(
              `export type ${getLabel(schema)} = ${getLabel(
                dataTypesMap[subClassInfo["@id"]]
              )};\r\n\r\n`
            );
            return;
          }
          const hasGenericSuper = hasGenericMember(subClassInfo);
          let isMultiGeneric = false;
          let willBeGeneric = hasGenericSuper;
          const superLabels: Array<string> | string = Array.isArray(
            subClassInfo
          )
            ? subClassInfo.map((item) => getLabel(schemaMap[item["@id"]]))
            : getLabel(schemaMap[subClassInfo["@id"]]);

          let extendsPart: string;
          if (!hasGenericSuper) {
            // no generics
            extendsPart = Array.isArray(superLabels)
              ? _.join(superLabels.map(typeOmitted), ", ")
              : typeOmitted(superLabels);
          } else {
            if (Array.isArray(subClassInfo)) {
              // Array with a few generics.
              const { lower, higher } = splitToLowerHigher(subClassInfo);
              if (higher.length > 1) {
                isMultiGeneric = true;
              } else {
                willBeGeneric = false;
              }
              extendsPart = toSpecific(
                lower.map((i) => getLabel(schemaMap[i["@id"]])),
                higher.map((i) => getLabel(schemaMap[i["@id"]])),
                isMultiGeneric ? " | " : ", ",
                true
              );
            } else {
              extendsPart = typeOmitted(`${superLabels}<T>`);
            }
          }
          if (isMultiGeneric) {
            ws.write(
              `export type ${getTypeScriptSafeLabel(
                getLabel(schema)
              )} = (${extendsPart}) & {\r\n`
            );
          } else {
            ws.write(
              `export interface ${getTypeScriptSafeLabel(getLabel(schema))}${
                willBeGeneric ? "<T = Text>" : ""
              } extends ${extendsPart} {\r\n`
            );
          }
        } else {
          ws.write(
            `export interface ${getTypeScriptSafeLabel(getLabel(schema))} {\r\n`
          );
        }

        ws.write(
          `  "@type" : "${getTypeScriptSafeLabel(getLabel(schema))}"\r\n`
        );
        Object.entries(schema.props).forEach(([propLabel, propType]) => {
          ws.write(`  ${propLabel} ?: ${propType}\r\n`);
        });
      }
      ws.write(`}\r\n\r\n`);
    });
};

export const toSpecific = (
  lowerTypes: Array<string>,
  higherTypes: Array<string>,
  separator: string,
  omit: boolean = false
) =>
  higherTypes
    .map((hLabel) => {
      return lowerTypes
        .map((lLabel) =>
          omit ? typeOmitted(`${hLabel}<${lLabel}>`) : `${hLabel}<${lLabel}>`
        )
        .join(separator);
    })
    .join(separator);

const LOWER = "lower";
const HIGHER = "higher";

export const splitToLowerHigher = (range: Array<PointerType>) => {
  const grouped: {
    [id: string]: Array<PointerType>;
  } = _.groupBy(range, (i) => (GENERIC_TYPES.has(i["@id"]) ? HIGHER : LOWER));

  return grouped;
};

export const hasGenericMember = (range: Array<PointerType> | PointerType) =>
  Array.isArray(range)
    ? _.some(range, (item) => GENERIC_TYPES.has(item["@id"]))
    : GENERIC_TYPES.has(range["@id"]);

export const getRangeString = (
  schemaMap: { [id: string]: SchemaType },
  range: PointerType | Array<PointerType>,
  plural: boolean
) => {
  // list item alone
  // list item with other types
  // no list item

  let value = null;
  if (Array.isArray(range)) {
    const includesGenericList = hasGenericMember(range);
    if (includesGenericList) {
      const { lower, higher } = splitToLowerHigher(range);
      const lowerTypes = lower.map((i) => getLabel(schemaMap[i["@id"]]));
      const lowerRange = lowerTypes.join(" | ");
      const higherTypes = higher.map((i) => getLabel(schemaMap[i["@id"]]));
      const higherRange = toSpecific(lowerTypes, higherTypes, " | ");
      return [lowerRange, higherRange].join(" | ");
    } else {
      return _.join(
        range.map((item) =>
          plural
            ? `Array<${getLabel(schemaMap[item["@id"]])}>`
            : getLabel(schemaMap[item["@id"]])
        ),
        " | "
      );
    }
  } else {
    value = getLabel(schemaMap[range["@id"]]);
    return plural ? `Array<${value}>` : `${value};`;
  }
};

export const typePicker = (typeKey: string | Array<string>) => (
  __: SchemaType[],
  k: string
) => {
  if (typeof typeKey == "string") {
    const groupKeys = k.split(",");
    return groupKeys.length > 1 ? _.includes(groupKeys, typeKey) : k == typeKey;
  } else {
    const groupKeys = k.split(",");
    return groupKeys.length > 1
      ? _.intersection(groupKeys, typeKey).length > 0
      : _.includes(typeKey, k);
  }
};
export const bySchemaType = (
  groupedSchema: _.Dictionary<SchemaType[]>,
  typeKey: string | Array<string>,
  negate: boolean = false
) =>
  _.pickBy(
    groupedSchema,
    negate ? _.negate(typePicker(typeKey)) : typePicker(typeKey)
  );

export const renderTypeDefs = (schemas: Array<SchemaType>) => {
  const schemaMap: { [id: string]: SchemaType } = toObject(schemas);
  const groupedSchema = _.groupBy(schemas, (item) => item["@type"]);
  const classes: { [id: string]: SchemaType } = toObject(
    _.flatten(
      _.values(
        bySchemaType(
          bySchemaType(groupedSchema, [DATATYPE_TYPE, PROPERTY_TYPE], true),
          CLASS_TYPE
        )
      )
    )
  );
  const dataTypes = _.flatten(
    _.values(bySchemaType(groupedSchema, DATATYPE_TYPE))
  );
  const properties: { [id: string]: SchemaType } = toObject(
    _.flatten(_.values(bySchemaType(groupedSchema, PROPERTY_TYPE)))
  );

  // group enumeration members
  const enumMembers = bySchemaType(
    groupedSchema,
    [CLASS_TYPE, PROPERTY_TYPE, DATATYPE_TYPE, BOOLEAN_TYPE],
    true
  );

  const withProperties = assignPropsToInterfaces(
    classes,
    properties,
    schemaMap
  );

  const ws = fs.createWriteStream(`${__dirname}/../types/index.d.ts`, {
    autoClose: true,
    encoding: "utf-8",
    flags: "w+",
  });

  // import Data Types
  reExportCoreTypes(ws, dataTypes, schemaMap);

  let singleEnums = _.pickBy(
    enumMembers,
    (__, id) => id.split(",").length == 1
  );
  const multies = _.pickBy(enumMembers, (__, id) => id.split(",").length > 1);

  _.keys(multies).forEach((multiKey) => {
    const ids = multiKey.split(",");
    ids.forEach((id) => {
      singleEnums[id] = [...singleEnums[id], ...multies[multiKey]];
    });
  });
  renderEnums(ws, singleEnums, schemaMap);

  const dataTypesMap: {
    [id: string]: SchemaType;
  } = toObject(dataTypes);

  renderInterfaces(ws, withProperties, enumMembers, dataTypesMap, schemaMap);

  ws.end();
};
