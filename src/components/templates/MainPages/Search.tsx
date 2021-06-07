import React, { useEffect, useState } from "react";
import MainSearchCon from "../../organisms/Containers/MainSearchCon";
import empty from "../../../img/wine_empty_search.png";
import Footer from "../../organisms/Footer/Footer";

import GoToTop from "../../atoms/Buttons/GoToTop";

interface State {
  searchWine: object[];
  hasData: boolean;
  goBack: () => void;
}

const Search = ({ searchWine, hasData, goBack }: State) => {
  const [scroll, setScroll] = useState(false);
  const handleScrollDown = () => {
    setScroll(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  });
  return (
    <div>
      {hasData ? (
        <div>
          <MainSearchCon searchWine={searchWine} goBack={goBack} />
          <div
            style={{
              opacity: scroll ? "1" : "0",
            }}
            onScroll={handleScrollDown}
          >
            <GoToTop />
          </div>
        </div>
      ) : (
        <div className="searchEmpty">
          <img src={empty} alt={"빈 검색"} />
        </div>
      )}
    </div>
  );
};

export default Search;
