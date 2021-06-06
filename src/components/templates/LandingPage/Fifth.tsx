import * as React from "react";
import { useHistory } from "react-router-dom";
import GoToTop from "../../atoms/Buttons/GoToTop";

function FifthPage() {
  const history = useHistory();
  return (
    <div className='FifthPageHover'>
      <div className="FifthPage_Summery">
        <h1 onClick={() => history.push("/survey")}>
          와인이 처음이어도 실패하지 않게
        </h1>
      </div>
      <i
        className="fas fa-arrow-alt-circle-right"
        onClick={() => history.push("/survey")}
      ></i>
    </div>
  );
}

export default FifthPage;
