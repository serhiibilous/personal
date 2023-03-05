import { defaultIcons } from "./icons";
import { IconProps } from "./types";
import { IconContainer } from "./icon-container";

export function Icon({ name, size }: IconProps) {
  const IconComponent = defaultIcons[name];

  return (
    <IconContainer size={size}>
      <IconComponent />
    </IconContainer>
  );
}
