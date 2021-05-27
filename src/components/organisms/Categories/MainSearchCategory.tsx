import React from "react";
import MainWineSearchCard from "../Cards/MainWineSearchCard";

const MainSearchCategory = () => {
  return (
    <div className="mainSearchCategory">
      <h2 className="mainCategoryName">검색</h2>
      <div className="mainWineSearchBox">
        <ul className="mainWineSearchList">
          <MainWineSearchCard />
          <MainWineSearchCard />
          <MainWineSearchCard />
          <MainWineSearchCard />
          <MainWineSearchCard />
        </ul>
      </div>
    </div>
  );
};

export default MainSearchCategory;
