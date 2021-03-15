#! /usr/bin/env node

// 2690 records
// 865 classes

import {
  getLabel,
  getUniqueProps,
  getUniqueTypes,
  PROPERTY_TYPE,
  SchemaType,
} from "./helpers";

const data = require("./jsonld.json");
const schemas = data["@graph"] as Array<SchemaType>;
const typeSchemas = getUniqueTypes(schemas);

export type schemaMapType = { [id: string]: Array<string> };
const types = typeSchemas.reduce((acc, item) => {
  try {
    const thisType = {
      "id": item["@id"],
      extends: item["rdfs:subClassOf"] || null,
      props: schemas
        // .filter((schema) => schema["@type"] == PROPERTY_TYPE)
        .filter(
          (schema) => schema!["schema:domainIncludes"]?.["@id"] == item["@id"]
        )
        .sort((a, b) => getLabel(a).localeCompare(getLabel(b)))
    };
    return {
      ...acc,
      [getLabel(item)]: thisType,
    };
  } catch (e) {
    console.log(item);
    return acc;
  }
}, {});
console.log(types);

// Grab provided args.
const [, , ...args] = process.argv;

// Print hello world provided args.
console.log(`Hello World ${args}`);
