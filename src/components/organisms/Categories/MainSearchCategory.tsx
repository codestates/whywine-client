import React, { useEffect } from "react";
import GoBackBtn from "../../atoms/Icons/GoBackBtn";
import MainWineSearchCard from "../Cards/MainWineSearchCard";

interface State {
  searchWine: object[];
  goBack: () => void;
}
const MainSearchCategory = ({ searchWine, goBack }: State) => {
  return (
    <div className="mainSearchCategory">
      <div className="mainSearchName">
        <h2>검색</h2>
        <GoBackBtn goBack={goBack} />
      </div>

      <ul className="mainWineSearchBox">
        {searchWine.map((wine: object, idx) => {
          return <MainWineSearchCard searchWine={wine} key={idx} />;
        })}
      </ul>
    </div>
  );
};

export default MainSearchCategory;
