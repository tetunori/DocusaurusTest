---
id: "cubebuttonchar"
title: "CubeButtonChar"
sidebar_label: "CubeButtonChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeButtonChar](cubebuttonchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeButtonChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubebuttonchar.md#constructor)

### Properties

* [characteristic](cubebuttonchar.md#protected-characteristic)
* [errStrInProgress](cubebuttonchar.md#protected-errstrinprogress)
* [uuid](cubebuttonchar.md#readonly-uuid)

### Methods

* [addEventListener](cubebuttonchar.md#addeventlistener)
* [isButtonPressed](cubebuttonchar.md#isbuttonpressed)
* [prepare](cubebuttonchar.md#prepare)
* [readValue](cubebuttonchar.md#readvalue)
* [setFrameRate](cubebuttonchar.md#setframerate)
* [writeValue](cubebuttonchar.md#writevalue)
* [writeValueCore](cubebuttonchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeButtonChar**(`service`: BluetoothRemoteGATTService): *[CubeButtonChar](cubebuttonchar.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[constructor](cubebatterychar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeButtonChar](cubebuttonchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Inherited from [CubeBatteryChar](cubebatterychar.md).[characteristic](cubebatterychar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeBatteryChar](cubebatterychar.md).[errStrInProgress](cubebatterychar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b20107-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/buttonChar.ts:5](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/buttonChar.ts#L5)*

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeButtonPressedStatusListner](../globals.md#cubebuttonpressedstatuslistner)): *void*

*Defined in [cube/char/buttonChar.ts:107](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/buttonChar.ts#L107)*

Register callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Specify the type from 'btpress' on Pressed, 'btrelease' on Released or 'btboth' on Pressed/Released. |
`listener` | [CubeButtonPressedStatusListner](../globals.md#cubebuttonpressedstatuslistner) | - |

**Returns:** *void*

___

###  isButtonPressed

▸ **isButtonPressed**(): *boolean*

*Defined in [cube/char/buttonChar.ts:59](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/buttonChar.ts#L59)*

Get current button pressed status.

**Returns:** *boolean*

boolean. true returns if pressed.

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/buttonChar.ts:18](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/buttonChar.ts#L18)*

Prepare for using button characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[readValue](cubebatterychar.md#readvalue)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[setFrameRate](cubebatterychar.md#setframerate)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L142)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  writeValue

▸ **writeValue**(`buf`: ArrayBuffer): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[writeValue](cubebatterychar.md#writevalue)*

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L55)*

Write value to remote GATT Characteristics.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.

___

###  writeValueCore

▸ **writeValueCore**(`buf`: ArrayBuffer, `countRetry`: number): *Promise‹string | Error›*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[writeValueCore](cubebatterychar.md#writevaluecore)*

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
