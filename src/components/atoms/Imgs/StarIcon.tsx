import React from "react";
import Icon from "../../../img/star-regular.svg";

interface IconProps {
  isActive: boolean;
}

export default function StarIcon({ isActive }: IconProps) {
  return (
    <span>
      <img
        src={Icon}
        className={isActive ? "star-active" : "star-no-active"}
      ></img>
    </span>
  );
}
