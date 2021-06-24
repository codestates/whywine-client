import React from "react";
import MainSearchCategory from "../Categories/MainSearchCategory";

interface State {
  searchWine: object[];
  goBack: () => void;
}

const MainSearchCon = ({ searchWine, goBack }: State) => {
  return (
    <div>
      <MainSearchCategory searchWine={searchWine} goBack={goBack} />
    </div>
  );
};

export default MainSearchCon;
