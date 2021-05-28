import React, { useState, useEffect } from "react";
import MainSearchBtn from "../../atoms/Buttons/MainSearchBtn";
import MainSearch from "../../atoms/Inputs/MainSearch";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const server = process.env.REACT_APP_API_SERVER;
//${server}
let word = "wine";

const MainSearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: any): void => {
    setSearch(e.target.value);
  };
  const handleClickSearchBtn = () => {
    console.log(search);
    axios
      .get(`${server}/main/search?word=${search}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="mainSearchBar">
      <MainSearch handleSearch={handleSearch} />
      <MainSearchBtn handleClickSearchBtn={handleClickSearchBtn} />
    </div>
  );
};

export default MainSearchBar;
