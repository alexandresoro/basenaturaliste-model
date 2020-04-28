import { CoordinatesSystemType } from "./coordinates-system/coordinates-system.object";

export interface Coordinates {
  system: CoordinatesSystemType;

  longitude: number;

  latitude: number;

  areTransformed?: boolean;

  areInvalid?: boolean;
}
