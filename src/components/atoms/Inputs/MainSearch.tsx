import React, { useState } from "react";

interface State {
  handleSearch: (e: any) => void;
}

const MainSearch = ({ handleSearch }: State) => {
  return (
    <form>
      <input
        className="mainSearch"
        placeholder="검색"
        onChange={handleSearch}
      />
    </form>
  );
};

export default MainSearch;
