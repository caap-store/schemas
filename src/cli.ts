#! /usr/bin/env node

// 2690 records
// 865 classes

import _ from "lodash";
import {
  writeDataTypes,
  SchemaType,
  reExport,
  writeClasses,
} from "./helpers";

const data = require("../jsonld.json");
const schemas = data["@graph"] as Array<SchemaType>;

const dataTypes = schemas.filter((item) =>
  Array.isArray(item["@type"])
    ? _.includes(item["@type"], "schema:DataType")
    : item["@type"] === "schema:DataType"
);
// console.log(dataTypes);
writeDataTypes(dataTypes);
// reExport("core", false);

writeClasses(schemas);
// console.log(schemas.find((item) => item["@id"] === "schema:URL"));
// const typeSchemas = getUniqueTypes(schemas);
// const nonClasses = getNonClasses(schemas);
// let types = {};

// nonClasses.forEach((item => {
//   item.
//   types
// }))

// const types = typeSchemas.reduce((acc, item) => {
//   const thisType = {
//     ...item,
//     props: schemas
//       // .filter((schema) => schema["@type"] == PROPERTY_TYPE)
//       .filter(
//         (schema) => schema!["schema:domainIncludes"]?.["@id"] == item["@id"]
//       )
//       .sort((a, b) => getLabel(a).localeCompare(getLabel(b))),
//   };
//   return {
//     ...acc,
//     [getLabel(item)]: thisType,
//   };
// }, {});

// console.log(getUniqueProps(schemas, "schema:domainIncludes"));
// console.log(getUniqueProps(schemas, "schema:rangeIncludes"));
// console.log(getUniqueProps(schemas, "rdfs:subClassOf"));

// Grab provided args.
const [, , ...args] = process.argv;

// Print hello world provided args.
console.log(`Hello World ${args}`);
