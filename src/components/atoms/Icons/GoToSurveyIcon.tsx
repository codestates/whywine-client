import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPollH } from "@fortawesome/free-solid-svg-icons";

export default function GoToSurveyIcon() {
  const [isOver, setIsOver] = useState(false);
  return (
    <>
      <FontAwesomeIcon
        icon={faPollH}
        size="2x"
        onClick={() => window.location.replace("/survey")}
        style={{ cursor: "pointer" }}
        onMouseOver={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      />
      <span className="goToSurveyIcon" style={{ opacity: isOver ? "1" : "0" }}>
        와인 테스트
      </span>
    </>
  );
}
