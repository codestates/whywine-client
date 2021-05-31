import React, { useState } from "react";

interface State {
  handleSearchInput: (e: any) => void;
}

const MainSearch = ({ handleSearchInput }: State) => {
  return (
    <form>
      <input
        className="mainSearch"
        placeholder="검색"
        onChange={handleSearchInput}
      />
    </form>
  );
};

export default MainSearch;
