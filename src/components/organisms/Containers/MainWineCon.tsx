import React from "react";
import Main from "../../templates/MainPages/Main";
import MainSearchCategory from "../Categories/MainSearchCategory";
import MainWineCategory from "../Categories/MainWineCategory";

interface WineData {
  randomWine: object[];
}

//! 와인 카테고리가 나뉘어서 들어와야함
const MainWineCon = ({ randomWine }: WineData) => {
  return (
    <div className="mainWineCon">
      <MainWineCategory randomWine={randomWine} />
    </div>
  );
};

export default MainWineCon;
