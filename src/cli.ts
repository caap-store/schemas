#! /usr/bin/env node

// 2690 records
// 865 classes

import _ from "lodash";
import {
  writeDataTypes,
  SchemaType,
  reExport,
  getUniqueProps,
  writeClasses,
  getEnumSubClasses,
  getNonEnumSubs,
  getNonClasses,
  getNonProperties,
  getClasses,
  getNonDataTypes,
  toObject,
  getDataTypes,
  enumFilter,
  getLabel,
} from "./helpers";
import { Car } from "../types";

// const something:Car = {
//   vehicleEngine: {
//     enginePower: {
//       name:
//     }
//   }
// }
const data = require("../jsonld.json");
const schemas = data["@graph"] as Array<SchemaType>;
console.log(
  getClasses(schemas).find(
    (item) => getLabel(item) == "MedicalImagingTechnique"
  )
);
// console.log(["No.classes", getUniqueProps(others, "@id").size]);
// console.log(schemas.length);
// console.log(others.length);
// // console.log(getEnumSubClasses(others));
// console.log(getNonEnumSubs(others).length);
console.log("No. types:", getUniqueProps(schemas, "@type").size);
console.log("No. datatypes:", getDataTypes(schemas).length);
console.log(
  "No. enums (these are also classes):",
  getEnumSubClasses(schemas).length
);
const enumMap: {
  [id: string]: SchemaType;
} = toObject(getEnumSubClasses(schemas));

const others = getNonProperties(getNonClasses(getNonDataTypes(schemas)));
const otherTypes = getUniqueProps(others, "@type") as Set<string>;
console.log(
  "No. types that are not datatypes or classes or properties:",
  otherTypes.size
);
// console.log(Object.keys(enumMap).sort());

const directEnums = _.filter([...otherTypes], (typeName) =>
  _.has(enumMap, typeName)
);

console.log("No. types that are direct enum values:", directEnums.length);

// console.log(schemas.find((item) => item["@id"] == "schema:Enumeration"));
// console.log(getUniqueProps(schemas, "@type").size);
// console.log(getUniqueProps(schemas, "rdfs:subClassOf"));
// console.log(schemas.filter(item => item["rdfs:subClassOf"]))

const dataTypes = schemas.filter((item) =>
  Array.isArray(item["@type"])
    ? _.includes(item["@type"], "schema:DataType")
    : item["@type"] === "schema:DataType"
);
console.log(dataTypes);
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
// const [, , ...args] = process.argv;

// Print hello world provided args.
// console.log(`Hello World ${args}`);
