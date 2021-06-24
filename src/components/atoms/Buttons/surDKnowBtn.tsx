import React from "react";
import { Route, Link } from "react-router-dom";

interface surDKnow {
  surNext: string;
}

const surDKnowBtn: React.FC<surDKnow> = ({ surNext }) => {
  return (
    <div>
      <div className="surDKnowBtn">
        <Link to={`/survey/${surNext}`}>잘 모르겠어요</Link>
      </div>
    </div>
  );
};

export default surDKnowBtn;
