// open json file
// load json file
// read types
import _ from "lodash";

export const CLASS_TYPE = "rdfs:Class";
export const PROPERTY_TYPE = "rdf:Property";

export type SchemaType = {
  "@type": string;
  "@id": string;
  "rdfs:label":
    | string
    | {
        "@language": string;
        "@value": string;
      };
  "schema:domainIncludes"?: {
    "@id": string;
  };
  "rdfs:subClassOf"?: {
    "@id": string;
  };
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

export const getUniqueTypes = (coll: Array<SchemaType>) => {
  return coll.filter((item) => item["@type"] === CLASS_TYPE);
};
