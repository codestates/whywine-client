import * as React from "react";
import { useHistory } from "react-router-dom";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";

function FirstPage() {
  const history = useHistory();
  const animatedItem = UseScrollFadeIn("right", 2, 1);

  return (
    <div>
      <div className="FirstPage_Summery">
        <h1>Best Wine</h1>
        <h1>For You.</h1>
        <p>와인을 처음 시작하는 당신을 위해</p>
      </div>
      <div className="inputSurvey">
        <div {...animatedItem}>설문하기</div>
        <i
          className="fas fa-arrow-alt-circle-right"
          onClick={() => history.push("/survey")}
        ></i>
      </div>
    </div>
  );
}

export default FirstPage;
