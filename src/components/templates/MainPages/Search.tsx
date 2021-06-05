import React, { useEffect } from "react";
import MainSearchCon from "../../organisms/Containers/MainSearchCon";
import empty from "../../../img/wine_empty_search.png";
import GoBackBtn from "../../atoms/Icons/GoBackBtn";

interface State {
  searchWine: object[];
  hasData: boolean;
  goBack: () => void;
}

const Search = ({ searchWine, hasData, goBack }: State) => {
  console.log(searchWine);

  return (
    <div>
      {hasData ? (
        <MainSearchCon searchWine={searchWine} goBack={goBack} />
      ) : (
        <div className="searchEmpty">
          <GoBackBtn goBack={goBack} />
          <img src={empty} alt={"빈 검색"} />
        </div>
      )}
    </div>
  );
};

export default Search;
