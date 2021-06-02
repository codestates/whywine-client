import React, { useState } from "react";
import SearchImg from "../Imgs/SearchImg";

interface State {
  handleSearchInput: (e: any) => void;
  handleClickSearchBtn: (e: any) => void;
}

const MainSearch = ({ handleSearchInput, handleClickSearchBtn }: State) => {
  return (
    <div>
      <input
        className="mainSearch"
        placeholder="와인 이름으로 검색해보세요"
        onChange={handleSearchInput}
        onKeyDown={handleClickSearchBtn}
      />
    </div>
  );
};

export default MainSearch;
