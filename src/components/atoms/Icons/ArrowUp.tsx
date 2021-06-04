import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function ArrowUp() {
  return (
    <FontAwesomeIcon
      icon={faArrowCircleUp}
      size="2x"
      onClick={() => window.scrollTo({ top: 0 })}
    />
  );
}
