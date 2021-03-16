// open json file
// load json file
// read types
import _ from "lodash";
import * as fs from "fs";

export const CLASS_TYPE = "rdfs:Class";
export const PROPERTY_TYPE = "rdf:Property";

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

export const getLabel = (item: SchemaType) =>
  _.isObject(item["rdfs:label"])
    ? item["rdfs:label"]["@value"]
    : item["rdfs:label"];

export const getUniqueProps = (
  coll: Array<SchemaType>,
  colName: keyof SchemaType
) => {
  const uniqValues = new Set(coll.map((item) => item[colName]));

  return uniqValues;
};

export const getUniqueTypes = (coll: Array<SchemaType>) =>
  coll
    .filter((item) => item["@type"] === CLASS_TYPE)
    .reduce(
      (acc, item) => ({
        ...acc,
        [item["@id"]]: item,
      }),
      {}
    );

export const getNonClasses = (coll: Array<SchemaType>) =>
  coll
    .filter((item) => item["@type"] !== CLASS_TYPE)
    .reduce(
      (acc, item) => ({
        ...acc,
        [item["@id"]]: item,
      }),
      {}
    );

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
// write derivative classes
// import * from index.d.ts
// write out the interfaces
// import everything to index.d.ts
// lint
