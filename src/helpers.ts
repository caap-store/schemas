import _ from "lodash";
import * as fs from "fs";

export const CLASS_TYPE = "rdfs:Class";
export const PROPERTY_TYPE = "rdf:Property";
export const ENUM_TYPE = "schema:Enumeration";
export const DATATYPE_TYPE = "schema:DataType";
export const BOOLEAN_TYPE = "schema:Boolean";
export const SUPERSEDED_BY = "schema:supersededBy";

export type PointerType = {
  "@id": string;
};

export type SchemaType = {
  "@type": string | Array<string>;
  "@id": string;
  "rdfs:comment"?: string;
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

export const getLabel = (item: SchemaType) =>
  _.isObject(item["rdfs:label"])
    ? item["rdfs:label"]["@value"]
    : item["rdfs:label"];

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
    ws.write(`/**\r\n`);
    ws.write("* ");
    ws.write(item["rdfs:comment"]);
    ws.write(`\r\n**\/\r\n`);
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

export const getRangeString = (
  schemas: { [id: string]: SchemaType },
  range: PointerType | Array<PointerType>,
  enumMembers: _.Dictionary<SchemaType[]>
) => {
  let value = null;
  let isSchemaEnum = false;
  let isBoolean = false;
  if (Array.isArray(range)) {
    if (enumMembers[range[0]["@id"]]) {
      isSchemaEnum = true;
    }
    const labels = range.map((item) => schemas[item["@id"]]["rdfs:label"]);
    value = _.join(labels, " | ");
  } else {
    isBoolean = range["@id"] == BOOLEAN_TYPE;
    if (!isBoolean && enumMembers[range["@id"]]) {
      isSchemaEnum = true;
    }
    value = getLabel(schemas[range["@id"]]);
  }

  return isSchemaEnum || isBoolean
    ? `${value};`
    : `${value} | Array<${value}>;`;
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

export const writeClasses = (schemas: Array<SchemaType>) => {
  const schemaMap: { [id: string]: SchemaType } = toObject(schemas);
  const groupedSchema = _.groupBy(schemas, (item) => item["@type"]);
  const classes: { [id: string]: SchemaType } = toObject(
    _.flatten(_.values(bySchemaType(groupedSchema, CLASS_TYPE)))
  );
  const dataTypes = _.flatten(
    _.values(bySchemaType(groupedSchema, DATATYPE_TYPE))
  );
  const listNonClasses = getNonClasses(schemas);
  const nonClasses: { [id: string]: SchemaType } = toObject(listNonClasses);
  const allSchema: { [id: string]: SchemaType } = toObject(schemas);

  // group enumeration members
  const enumMembers = bySchemaType(
    groupedSchema,
    [CLASS_TYPE, PROPERTY_TYPE, DATATYPE_TYPE, BOOLEAN_TYPE],
    true
  );

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

  Object.entries(nonClasses)
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
          classTypes[value["@id"]]!.props[getLabel(schema)] = getRangeString(
            allSchema,
            schema["schema:rangeIncludes"] as PointerType | Array<PointerType>,
            enumMembers
          );
        });
      }
    });

  const ws = fs.createWriteStream(`${__dirname}/../types/index.d.ts`, {
    autoClose: true,
    encoding: "utf-8",
    flags: "w+",
  });

  ws.write(
    `import { ${_.join(
      dataTypes.map((item) => getLabel(item)),
      ", "
    )} } from "./core";\r\n\r\n`
  );

  ws.write(
    `export type DataType = ${_.join(
      dataTypes.map((item) => getLabel(item)),
      " | "
    )};\r\n\r\n`
  );

  let singles = _.pickBy(enumMembers, (__, id) => id.split(",").length == 1);
  const multies = _.pickBy(enumMembers, (__, id) => id.split(",").length > 1);

  _.keys(multies).forEach((multiKey) => {
    const ids = multiKey.split(",");
    ids.forEach((id) => {
      singles[id] = [...singles[id], ...multies[multiKey]];
    });
  });

  Object.keys(singles)
    .sort()
    .forEach((id: string) => {
      const singleEnumItems = singles[id].map((item) => getLabel(item)).sort();
      const singleParent = getLabel(schemaMap[id]);
      ws.write(`export type ${singleParent} =\r\n`);
      singleEnumItems.forEach((val, index, arr) => {
        ws.write(`  | "${val}"\r\n${index == arr.length - 1 ? ";" : ""}`);
      });
      ws.write(`\r\n`);
    });

  Object.entries(classTypes)
    .sort(([_, a], [__, b]) => getLabel(a).localeCompare(getLabel(b)))
    .forEach(([id, schema]) => {
      if (id == DATATYPE_TYPE) {
        // no need to render this because it's rdfs:Class
        return;
      }
      if (enumMembers[id]) {
        // do not render enums
        return;
      } else {
        if (schema["rdfs:subClassOf"]) {
          try {
            const subClassInfo = schema["rdfs:subClassOf"];
            const extendsPart = Array.isArray(subClassInfo)
              ? _.join(
                  subClassInfo.map((item) => getLabel(allSchema[item["@id"]])),
                  " extends "
                )
              : getLabel(allSchema[subClassInfo["@id"]]);
            ws.write(
              `export interface ${getTypeScriptSafeLabel(
                getLabel(schema)
              )} extends ${extendsPart} {\r\n`
            );
          } catch (e) {
            console.error(e);
            console.error(schema);
          }
        } else {
          ws.write(
            `export interface ${getTypeScriptSafeLabel(getLabel(schema))} {\r\n`
          );
        }
        ws.write(`  "type": "${getLabel(schema)}"\r\n`);
        Object.entries(schema.props).forEach(([propLabel, propType]) => {
          ws.write(`  ${propLabel} ?: ${propType}\r\n`);
        });
      }
      ws.write(`}\r\n\r\n`);
    });

  ws.end();
};
