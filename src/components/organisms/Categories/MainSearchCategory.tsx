import React from "react";
import MainWineSearchCard from "../Cards/MainWineSearchCard";

interface State {
  searchWine: object[];
}
const MainSearchCategory = ({ searchWine }: State) => {
  return (
    <div className="mainSearchCategory">
      <h2 className="mainCategoryName">검색</h2>
      <div className="mainWineSearchBox">
        <ul className="mainWineSearchList">
          {searchWine.map((wine) => {
            return <MainWineSearchCard searchWine={wine} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainSearchCategory;
