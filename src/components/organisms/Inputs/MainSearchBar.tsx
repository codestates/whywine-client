import React, { useState, useEffect } from "react";
import MainSearchBtn from "../../atoms/Buttons/MainSearchBtn";
import MainSearch from "../../atoms/Inputs/MainSearch";
import axios from "axios";
import dotenv from "dotenv";

interface State {
  handleSearchInput: (e: any) => void;
  handleClickSearchBtn: (e: any) => void;
}
dotenv.config();
const server = process.env.REACT_APP_API_SERVER;
//${server}
let word = "wine";

const MainSearchBar = ({ handleSearchInput, handleClickSearchBtn }: State) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: any): void => {
    setSearch(e.target.value);
  };

  return (
    <div className="mainSearchBar">
      <MainSearch
        handleSearchInput={handleSearchInput}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      {/* <MainSearchBtn handleClickSearchBtn={handleClickSearchBtn} /> */}
    </div>
  );
};

export default MainSearchBar;
