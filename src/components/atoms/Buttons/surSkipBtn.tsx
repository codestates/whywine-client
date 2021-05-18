import React from "react";
import { useHistory } from "react-router-dom";

export default function surSkipBtn() {
  const history = useHistory();

  return (
    <div>
      <button className="surveySkipBtn" onClick={() => history.push("/main")}>
        건너뛰기
      </button>
    </div>
  );
}
