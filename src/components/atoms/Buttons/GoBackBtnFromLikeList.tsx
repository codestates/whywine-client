import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default function GoBackBtnFromLikeList() {
  const history = useHistory();

  return (
    <div
      className="searchGoBack"
      onClick={() => history.push("/main")}
      style={{ cursor: "pointer", marginTop: "6px" }}
    >
      <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
      <span style={{ marginLeft: "5px" }}>뒤로가기</span>
    </div>
  );
}
