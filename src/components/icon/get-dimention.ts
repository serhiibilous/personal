import { IconSizes } from "./types";

export function getDimension(size?: IconSizes) {
  switch (size) {
    case "large":
      return 10;
    case "medium":
      return 8;
    case "normal":
      return 6;
    case "small":
      return 4;
    default:
      return 6;
  }
}
