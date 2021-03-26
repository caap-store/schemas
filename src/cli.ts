#! /usr/bin/env node

// 2690 records
// 865 classes

import _ from "lodash";
import {
  writeDataTypes,
  SchemaType,
  renderTypeDefs,
  DATATYPE_TYPE,
} from "./helpers";
const data = require("../jsonld.json");
const schemas = data["@graph"] as Array<SchemaType>;

const dataTypes = schemas.filter((item) =>
  Array.isArray(item["@type"])
    ? _.includes(item["@type"], DATATYPE_TYPE)
    : item["@type"] === DATATYPE_TYPE
);
writeDataTypes(dataTypes);

renderTypeDefs(schemas);
