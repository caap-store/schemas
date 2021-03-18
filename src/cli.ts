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
  getLabel,
  DATATYPE_TYPE,
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

const directEnums = _.filter([...otherTypes], (typeName) =>
  _.has(enumMap, typeName)
);

console.log("No. types that are direct enum values:", directEnums.length);

const dataTypes = schemas.filter((item) =>
  Array.isArray(item["@type"])
    ? _.includes(item["@type"], DATATYPE_TYPE)
    : item["@type"] === DATATYPE_TYPE
);
writeDataTypes(dataTypes);

writeClasses(schemas);
