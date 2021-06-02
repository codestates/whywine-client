import React, { useEffect } from "react";
import MainSearchCon from "../../organisms/Containers/MainSearchCon";

interface State {
  searchWine: object[][];
  hasData: boolean;
}

const Search = ({ searchWine, hasData }: State) => {
  const handleLoading = () => {
    return <div>loading..</div>;
  };
  useEffect(() => {
    handleLoading();
  }, []);

  return (
    <div>
      {hasData ? (
        <MainSearchCon searchWine={searchWine} />
      ) : (
        <div>검색된 와인이 없네요.</div>
      )}
    </div>
  );
};

export default Search;
