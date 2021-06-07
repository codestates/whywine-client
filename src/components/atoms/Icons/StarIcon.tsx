import React from "react";
import Icon from "../../../img/star-solid.svg";

interface IconProps {
  isActive: boolean;
}

export default function StarIcon({ isActive }: IconProps) {
  return (
    <span>
      <img
        src={Icon}
        className={isActive ? "starActive" : "starNoActive"}
      ></img>
    </span>
  );
}
