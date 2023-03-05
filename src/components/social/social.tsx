import React, { HTMLAttributes, useMemo } from "react";

import { Icon, DefaultIconNames } from "@components";
import { Social } from "@types";

import { SocialLink } from "./components";

import social from "./data.json";

export function Social({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const socialData = useMemo(() => social.data as Social[], []);

  return (
    <div {...props}>
      {socialData.map((socialItem) => {
        return (
          <SocialLink
            key={socialItem.name}
            href={socialItem.link}
            aria-label={`Follow on ${socialItem.name}`}
          >
            <Icon name={socialItem.icon as DefaultIconNames} />
          </SocialLink>
        );
      })}
    </div>
  );
}
