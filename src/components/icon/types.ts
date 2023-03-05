import { defaultIcons } from "./icons";

export type DefaultIconNames = keyof typeof defaultIcons;

export type IconSizes = "large" | "medium" | "normal" | "small";

// export type IconNames = DefaultIconNames; // Combine with another types

export type IconProps = {
  name: DefaultIconNames;
  size?: IconSizes;
};
