import React from "react";
import { Route, Link } from "react-router-dom";

interface nextBtnType {
  btnType: string;
  surNext: string;
}

//? 메소드로 다음, 뒤로가기 버튼을 재사용해서 활용할 수 있지 않을까?
const surNextBtn: React.FC<nextBtnType> = ({ btnType, surNext }) => {
  return (
    <div>
      <div className="surNextBtn">
        <Link to={`/survey/${surNext}`}>{btnType}</Link>
      </div>
    </div>
  );
};

export default surNextBtn;
