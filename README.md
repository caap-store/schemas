TypeScript interfaces for schema.org.

## The Why
One of the biggest blockers to code-reuse is differences in data schema. There's a need for a central repository of different business schema. schema.org is a collaborative effort by major search engines to capture this common knowledge.

This package aims to offer the same knowledge as TypeScript definitions so that it's easy for different teams to work together. By conforming to this interface, components written by diverse authors can **communicate in common terms**.

## Installation

`yarn add -D @caap-store/schemas`

or 

`npm install --save-dev @caap-store/schemas`


## Requirements

`typescript`

I tested with `"typescript": "^4.2.3"`

## How to use

```
import { Car } from "@caap-store/schemas";

const exampleCar:Car = {
    name: "2019 Volvo S60 MOMENTUM S60 T6 AWD",
    manufacturer: "Volv",
    model: "S60 T6 AWD",
    vehicleInteriorColor: "silver",
    color: "blue",
    mileageFromOdometer: {
        unitText: "kms",
        value: 12345,
    },
    bodyType: "Sedan",
    driveWheelConfiguration: "AllWheelDriveConfiguration",
}
```

Properties are optional to not make any assumptions about end use. You can extend/override the parent interface to create more specific types for your project. This allows you to plugin external components with minimal effort.

**Override Example**:

(Note: You'll need typescript 3.5.3 above to do this)
```
import { Car as OriginalCar, URL } from "@caap-store/schemas";

interface Car extends Omit<OriginalCar, 'image'> {
  image: Array<URL>; // support multiple images
}
```

**Extend Example**:

```
import { Car as OriginalCar, URL } from "@caap-store/schemas";

interface Car extends OriginalCar {
  dealership: URL // pointer to the dealership
}
```

## Interface documentation

Documentation on individual interfaces can be found at https://Schema.org/\<Interface-Name\>. Also viewable on hover in VS Code.

[![Screenshot-2021-03-24-at-14-57-57.png](https://i.postimg.cc/Y2YQhNtX/Screenshot-2021-03-24-at-14-57-57.png)](https://postimg.cc/xqjXZzJH)

### To-do

Matching package versions with schema.org [versions](https://github.com/schemaorg/schemaorg/blob/main/versions.json).