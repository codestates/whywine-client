import React from "react";
import MainSearchCategory from "../Categories/MainSearchCategory";

interface State {
  searchWine: object[][];
}

const MainSearchCon = ({ searchWine }: State) => {
  return (
    <div>
      <MainSearchCategory searchWine={searchWine} />
    </div>
  );
};

export default MainSearchCon;
