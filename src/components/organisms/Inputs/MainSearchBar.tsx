import React from "react";
import MainSearchBtn from "../../atoms/Buttons/MainSearchBtn";
import MainSearch from "../../atoms/Inputs/MainSearch";

const MainSearchBar = () => {
  return (
    <div className="mainSearchBar">
      <MainSearch />
      <MainSearchBtn />
    </div>
  );
};

export default MainSearchBar;
