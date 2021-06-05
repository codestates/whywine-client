import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function StarIconRegular() {
  return (
    <div className="rating">
      <FontAwesomeIcon icon={faStar} size="2x" />
    </div>
  );
}
