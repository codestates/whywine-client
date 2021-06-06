import React from "react";
import Main from "../../templates/MainPages/Main";
import MainSubWineCategory from "../Categories/MainSubWineCategory";
import MainWineCategory from "../Categories/MainWineCategory";

interface WineData {
  randomWine: object[];
  subWine: any;
  handleLoading: (time: number | undefined) => void;
}

//! 와인 카테고리가 나뉘어서 들어와야함
const MainWineCon = ({ randomWine, handleLoading, subWine }: WineData) => {
  return (
    <div className="mainWineCon">
      <MainWineCategory handleLoading={handleLoading} randomWine={randomWine} />
      <MainSubWineCategory subWine={subWine} />
    </div>
  );
};

export default MainWineCon;
