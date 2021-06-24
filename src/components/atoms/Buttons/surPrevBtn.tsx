import React from "react";
import { Route, Link } from "react-router-dom";

interface prevBtnType {
  btnType: string;
  surPrev: string;
}

const surPrevBtn: React.FC<prevBtnType> = ({ btnType, surPrev }) => {
  return (
    <div>
      <div className="surPrevBtn">
        <Link to={`/survey/${surPrev}`}>{btnType}</Link>
      </div>
    </div>
  );
};

export default surPrevBtn;
