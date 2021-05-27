import React from "react";

interface State {
  handleClickSearchBtn: () => void;
}
const MainSearchBtn = ({ handleClickSearchBtn }: State) => {
  return (
    <div>
      <button className="mainSearchBtn" onClick={handleClickSearchBtn}>
        검색
      </button>
    </div>
  );
};

export default MainSearchBtn;
