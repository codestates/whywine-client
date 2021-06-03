import React, { useState } from "react";
import ClickSearch from "../Imgs/ClickSearch";

interface State {
  handleSearchInput?: (e: any) => void;
  handleClickSearchBtn?: (e: any) => void;
}

const MainSearch = ({ handleSearchInput, handleClickSearchBtn }: State) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <input
        className={isClicked ? "mainSearch active" : "mainSearch"}
        placeholder="와인 이름을 검색해보세요"
        onChange={handleSearchInput}
        onKeyDown={handleClickSearchBtn}
        onMouseOver={handleIsClicked}
        // onMouseLeave={handleIsClicked}
      />
      <ClickSearch isClicked={isClicked} />
    </div>
  );
};

export default MainSearch;
