import * as React from "react";
import { useHistory } from "react-router-dom";
import GoToTop from "../../atoms/Buttons/GoToTop";
import WineIcon from "../../atoms/Icons/Wine";

function FifthPage() {
  const history = useHistory();
  return (
    <div className="FifthPageHover">
      <div className="FifthPage_Summery">
        <h1>와인이 처음이어도</h1>
        <h1>실패하지 않게</h1>

        <h2>
          whywine <WineIcon />
        </h2>
      </div>
      <p onClick={() => history.push("/survey")}>
        테스트 하러 가기 <i className="fas fa-arrow-alt-circle-right"></i>
      </p>
    </div>
  );
}

export default FifthPage;
