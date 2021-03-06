---
id: "skunk"
title: "Skunk"
sidebar_label: "Skunk"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [Skunk](skunk.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **Skunk**

## Index

### Properties

* [idTable](skunk.md#static-readonly-idtable)

### Methods

* [getIdName](skunk.md#static-getidname)
* [includes](skunk.md#static-includes)

### Object literals

* [names](skunk.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: Skunk.names.blueSkunk, id: 3670078 },
    { name: Skunk.names.greenSkunk, id: 3670042 },
    { name: Skunk.names.yellowSkunk, id: 3670080 },
    { name: Skunk.names.orangeSkunk, id: 3670044 },
    { name: Skunk.names.redSkunk, id: 3670082 },
    { name: Skunk.names.brownSkunk, id: 3670046 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/skunk.ts:12](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L12)*

## Methods

### `Static` getIdName

▸ **getIdName**(`value`: number): *string | undefined*

*Inherited from [SimpleCardAlphabet](simplecardalphabet.md).[getIdName](simplecardalphabet.md#static-getidname)*

*Defined in [id/standard/standardId.ts:11](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/standardId.ts#L11)*

Get standard ID string name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | Standard ID number value  |

**Returns:** *string | undefined*

ID name string. If specified standardID is not supported, this function returns undefined.

___

### `Static` includes

▸ **includes**(`idName`: string): *boolean*

*Inherited from [SimpleCardAlphabet](simplecardalphabet.md).[includes](simplecardalphabet.md#static-includes)*

*Defined in [id/standard/standardId.ts:30](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/standardId.ts#L30)*

Specified standard ID is included or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idName` | string | Standard ID name. Set the element of this.names.  |

**Returns:** *boolean*

true iff specified standard ID is toio Collection card.

## Object literals

### `Static` `Readonly` names

### ▪ **names**: *object*

*Defined in [id/standard/skunk.ts:2](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L2)*

###  blueSkunk

• **blueSkunk**: *string* = "blueSkunk"

*Defined in [id/standard/skunk.ts:3](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L3)*

###  brownSkunk

• **brownSkunk**: *string* = "brownSkunk"

*Defined in [id/standard/skunk.ts:8](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L8)*

###  greenSkunk

• **greenSkunk**: *string* = "greenSkunk"

*Defined in [id/standard/skunk.ts:4](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L4)*

###  orangeSkunk

• **orangeSkunk**: *string* = "orangeSkunk"

*Defined in [id/standard/skunk.ts:6](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L6)*

###  redSkunk

• **redSkunk**: *string* = "redSkunk"

*Defined in [id/standard/skunk.ts:7](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L7)*

###  yellowSkunk

• **yellowSkunk**: *string* = "yellowSkunk"

*Defined in [id/standard/skunk.ts:5](https://github.com/tetunori/p5.toio/blob/0ed7381/src/id/standard/skunk.ts#L5)*
