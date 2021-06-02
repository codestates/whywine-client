import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

interface State {
  goBack: () => void;
}
export default function GoBackBtn({ goBack }: State) {
  return (
    <FontAwesomeIcon
      icon={faArrowAltCircleLeft}
      size="2x"
      onClick={goBack}
      style={{ cursor: "pointer" }}
    />
  );
}
