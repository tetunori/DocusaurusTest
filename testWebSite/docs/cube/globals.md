---
id: "globals"
title: "p5.toio"
sidebar_label: "Globals"
---

[p5.toio](index.md) › [Globals](globals.md)

## Index

### Classes

* [Cube](classes/cube.md)
* [CubeBase](classes/cubebase.md)
* [CubeBatteryChar](classes/cubebatterychar.md)
* [CubeButtonChar](classes/cubebuttonchar.md)
* [CubeChar](classes/cubechar.md)
* [CubeConnector](classes/cubeconnector.md)
* [CubeIDChar](classes/cubeidchar.md)
* [CubeLightChar](classes/cubelightchar.md)
* [CubeMotorChar](classes/cubemotorchar.md)
* [CubeScanner](classes/cubescanner.md)
* [CubeSensorChar](classes/cubesensorchar.md)
* [CubeSoundChar](classes/cubesoundchar.md)
* [P5tCube](classes/p5tcube.md)

### Interfaces

* [CubeBaseIF](interfaces/cubebaseif.md)
* [CubeCharIF](interfaces/cubecharif.md)

### Type aliases

* [CubeBatteryCharListner](globals.md#cubebatterycharlistner)
* [CubeBatteryLevelListner](globals.md#cubebatterylevellistner)
* [CubeButtonCharListner](globals.md#cubebuttoncharlistner)
* [CubeButtonPressedStatusListner](globals.md#cubebuttonpressedstatuslistner)
* [CubeCharInstance](globals.md#cubecharinstance)
* [CubeCollisionListner](globals.md#cubecollisionlistner)
* [CubeDoubleTapListner](globals.md#cubedoubletaplistner)
* [CubeFlatListner](globals.md#cubeflatlistner)
* [CubeIdCharListner](globals.md#cubeidcharlistner)
* [CubeListner](globals.md#cubelistner)
* [CubePositionIdListner](globals.md#cubepositionidlistner)
* [CubePostureListner](globals.md#cubeposturelistner)
* [CubeSensorCharListner](globals.md#cubesensorcharlistner)
* [CubeStandardIdListner](globals.md#cubestandardidlistner)
* [idInfo](globals.md#idinfo)
* [positionIdInfo](globals.md#positionidinfo)
* [sensorInfo](globals.md#sensorinfo)
* [standardIdInfo](globals.md#standardidinfo)

## Type aliases

###  CubeBatteryCharListner

Ƭ **CubeBatteryCharListner**: *[CubeBatteryLevelListner](globals.md#cubebatterylevellistner)*

*Defined in [cube/char/batteryChar.ts:2](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/batteryChar.ts#L2)*

___

###  CubeBatteryLevelListner

Ƭ **CubeBatteryLevelListner**: *function*

*Defined in [cube/char/batteryChar.ts:1](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/batteryChar.ts#L1)*

#### Type declaration:

▸ (`batteryLevel`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`batteryLevel` | number |

___

###  CubeButtonCharListner

Ƭ **CubeButtonCharListner**: *[CubeButtonPressedStatusListner](globals.md#cubebuttonpressedstatuslistner)*

*Defined in [cube/char/buttonChar.ts:2](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/buttonChar.ts#L2)*

___

###  CubeButtonPressedStatusListner

Ƭ **CubeButtonPressedStatusListner**: *function*

*Defined in [cube/char/buttonChar.ts:1](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/buttonChar.ts#L1)*

#### Type declaration:

▸ (`isPressed?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isPressed?` | undefined &#124; false &#124; true |

___

###  CubeCharInstance

Ƭ **CubeCharInstance**: *[CubeIDChar](classes/cubeidchar.md) | [CubeMotorChar](classes/cubemotorchar.md) | [CubeLightChar](classes/cubelightchar.md) | [CubeSensorChar](classes/cubesensorchar.md) | [CubeBatteryChar](classes/cubebatterychar.md) | [CubeSoundChar](classes/cubesoundchar.md) | [CubeButtonChar](classes/cubebuttonchar.md) | undefined*

*Defined in [cube/cubeBase.ts:7](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/cubeBase.ts#L7)*

___

###  CubeCollisionListner

Ƭ **CubeCollisionListner**: *function*

*Defined in [cube/char/sensorChar.ts:7](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/sensorChar.ts#L7)*

#### Type declaration:

▸ (): *void*

___

###  CubeDoubleTapListner

Ƭ **CubeDoubleTapListner**: *function*

*Defined in [cube/char/sensorChar.ts:8](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/sensorChar.ts#L8)*

#### Type declaration:

▸ (): *void*

___

###  CubeFlatListner

Ƭ **CubeFlatListner**: *function*

*Defined in [cube/char/sensorChar.ts:6](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/sensorChar.ts#L6)*

#### Type declaration:

▸ (`isFlat`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isFlat` | boolean |

___

###  CubeIdCharListner

Ƭ **CubeIdCharListner**: *[CubePositionIdListner](globals.md#cubepositionidlistner) | [CubeStandardIdListner](globals.md#cubestandardidlistner)*

*Defined in [cube/char/idChar.ts:26](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/idChar.ts#L26)*

___

###  CubeListner

Ƭ **CubeListner**: *[CubeSensorCharListner](globals.md#cubesensorcharlistner) | [CubeBatteryCharListner](globals.md#cubebatterycharlistner) | [CubeButtonCharListner](globals.md#cubebuttoncharlistner) | [CubeIdCharListner](globals.md#cubeidcharlistner)*

*Defined in [cube/cubeBase.ts:1](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/cubeBase.ts#L1)*

___

###  CubePositionIdListner

Ƭ **CubePositionIdListner**: *function*

*Defined in [cube/char/idChar.ts:24](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/idChar.ts#L24)*

#### Type declaration:

▸ (`info`: [positionIdInfo](globals.md#positionidinfo)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [positionIdInfo](globals.md#positionidinfo) |

___

###  CubePostureListner

Ƭ **CubePostureListner**: *function*

*Defined in [cube/char/sensorChar.ts:9](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/sensorChar.ts#L9)*

#### Type declaration:

▸ (`posture`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`posture` | string |

___

###  CubeSensorCharListner

Ƭ **CubeSensorCharListner**: *[CubeFlatListner](globals.md#cubeflatlistner) | [CubeCollisionListner](globals.md#cubecollisionlistner) | [CubeDoubleTapListner](globals.md#cubedoubletaplistner) | [CubePostureListner](globals.md#cubeposturelistner)*

*Defined in [cube/char/sensorChar.ts:10](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/sensorChar.ts#L10)*

___

###  CubeStandardIdListner

Ƭ **CubeStandardIdListner**: *function*

*Defined in [cube/char/idChar.ts:25](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/idChar.ts#L25)*

#### Type declaration:

▸ (`info`: [standardIdInfo](globals.md#standardidinfo)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [standardIdInfo](globals.md#standardidinfo) |

___

###  idInfo

Ƭ **idInfo**: *object*

*Defined in [cube/char/idChar.ts:19](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/idChar.ts#L19)*

#### Type declaration:

* **positionId**: *[positionIdInfo](globals.md#positionidinfo)*

* **standardId**: *[standardIdInfo](globals.md#standardidinfo)*

___

###  positionIdInfo

Ƭ **positionIdInfo**: *object | undefined*

*Defined in [cube/char/idChar.ts:1](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/idChar.ts#L1)*

___

###  sensorInfo

Ƭ **sensorInfo**: *object*

*Defined in [cube/char/sensorChar.ts:1](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/sensorChar.ts#L1)*

#### Type declaration:

* **flat**: *boolean*

* **posture**: *string*

___

###  standardIdInfo

Ƭ **standardIdInfo**: *object | undefined*

*Defined in [cube/char/idChar.ts:11](https://github.com/tetunori/p5.toio/blob/0ed7381/src/cube/char/idChar.ts#L11)*
