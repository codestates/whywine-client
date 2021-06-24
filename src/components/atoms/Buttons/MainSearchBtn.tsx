import React from "react";
import { Link } from "react-router-dom";

interface State {
  handleClickSearchBtn: (e: any) => void;
}
const MainSearchBtn = ({ handleClickSearchBtn }: State) => {
  return (
    <div>
      <button className="mainSearchBtn" onClick={handleClickSearchBtn}>
        검색{" "}
      </button>
    </div>
  );
};

export default MainSearchBtn;
