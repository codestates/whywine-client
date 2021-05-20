import * as React from "react";
import { useHistory } from "react-router-dom";

function FourthPage() {
  const history = useHistory();
  return (
    <div>
      <div className="FourthPage_Summery">
        <h1>와인이 처음이어도 실패하지 않게</h1>
        <i
          className="fas fa-arrow-alt-circle-right"
          onClick={() => history.push("/survey")}
        ></i>
      </div>
    </div>
  );
}

export default FourthPage;
