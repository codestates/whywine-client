import React, { useState, useEffect } from "react";
import MainSearchBtn from "../../atoms/Buttons/MainSearchBtn";
import MainSearch from "../../atoms/Inputs/MainSearch";
import axios from "axios";

let word = "wine";

const MainSearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: any): void => {
    setSearch(e.target.value);
  };
  const handleClickSearchBtn = () => {
    console.log(search);
    axios
      .get(`https://localhost:4000/main/search?word=${search}`, {
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
