// open json file
// load json file
// read types
import _, { iteratee } from "lodash";
import * as fs from "fs";

export const CLASS_TYPE = "rdfs:Class";
export const PROPERTY_TYPE = "rdf:Property";
export const ENUM_TYPE = "schema:Enumeration";
export const DATATYPE_TYPE = "schema:DataType";

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

export const enumFilter = (item: SchemaType) =>
  item["rdfs:subClassOf"]
    ? Array.isArray(item["rdfs:subClassOf"])
      ? _.includes(
          item["rdfs:subClassOf"].map((v) => v["@id"]),
          "schema:Enumeration"
        )
      : item["rdfs:subClassOf"]["@id"] == "schema:Enumeration"
    : false;

export const getEnumSubClasses = (coll: Array<SchemaType>) => {
  return coll.filter(enumFilter);
};

export const getNonEnumSubs = (coll: Array<SchemaType>) =>
  coll.filter(_.negate(enumFilter));

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
  range: PointerType | Array<PointerType>
) => {
  let value = null;
  if (Array.isArray(range)) {
    const labels = range.map((item) => schemas[item["@id"]]["rdfs:label"]);
    value = _.join(labels, " | ");
  } else {
    value = getLabel(schemas[range["@id"]]);
  }
  return `${value} | Array<${value}>`;
};

export const typePicker = (typeKey: string | Array<string>) => (
  __: SchemaType[],
  k: string | Array<string>
) => {
  if (typeof typeKey == "string") {
    return Array.isArray(k) ? _.includes(k, typeKey) : k == typeKey;
  } else {
    return Array.isArray(k)
      ? _.intersection(k, typeKey).length > 0
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
  // const schemas = _.filter(allSchemas, (i) => i["@id"] !== DATATYPE_TYPE);
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
    [CLASS_TYPE, PROPERTY_TYPE, DATATYPE_TYPE],
    true
  );

  // use enumeration members as values for enum classes.

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
      if (schema["schema:domainIncludes"]) {
        const domains = Array.isArray(schema["schema:domainIncludes"])
          ? schema["schema:domainIncludes"]
          : [schema["schema:domainIncludes"]];

        domains.forEach((value) => {
          classTypes[value["@id"]]!.props[getLabel(schema)] = getRangeString(
            allSchema,
            schema["schema:rangeIncludes"] as PointerType | Array<PointerType>
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
    `import {${_.join(
      dataTypes.map((item) => getLabel(item)),
      ", "
    )}} from "./core";\r\n\r\n`
  );

  Object.entries(classTypes)
    .sort(([_, a], [__, b]) => getLabel(a).localeCompare(getLabel(b)))
    .forEach(([id, schema]) => {
      if (id == DATATYPE_TYPE) {
        // no need to render this because it's rdfs:Class
        return;
      }
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
          console.error(e)
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

      ws.write(`}\r\n`);
    });

  ws.end();
  // get imports
  // get
};
// write derivative classes
// import * from index.d.ts
// write out the interfaces
// import everything to index.d.ts
// lint
