import React from "react";
import Main from "../../templates/Main";
import MainWineCategory from "../Boxs/MainWineCategory";

const MainWineCon = () => {
  let categories = [
    "당신을 위한 완벽한 와인",
    "적합한",
    "당신의 선택을 존중합니다",
  ];

  return (
    <div className="mainWineCon">
      {categories.map((category) => {
        return <MainWineCategory category={category} />;
      })}
    </div>
  );
};

export default MainWineCon;
