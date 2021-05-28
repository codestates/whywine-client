import React from "react";
import Main from "../../templates/Main";
import MainSearchCategory from "../Categories/MainSearchCategory";
import MainWineCategory from "../Categories/MainWineCategory";

// interface Tags {
//   tags: string;
//   userTags: string;
// }

//! 와인 카테고리가 나뉘어서 들어와야함
const MainWineCon = () => {
  let categories = [`당신을 위한 \        완벽한 와인`];

  return (
    <div className="mainWineCon">
      {categories.map((category) => {
        return <MainWineCategory category={category} />;
      })}
      <MainSearchCategory />
    </div>
  );
};

export default MainWineCon;
