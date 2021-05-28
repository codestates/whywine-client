import React from "react";
import MainWineTags from "../Tags/MainWineTags";

interface Tags {
  userMainTag: string[];
  setUserMainTag: React.Dispatch<React.SetStateAction<string[]>>;
}
const MainWineTagCon = ({ userMainTag, setUserMainTag }: Tags) => {
  return (
    <div className="mainWineTagCon">
      <MainWineTags userMainTag={userMainTag} setUserMainTag={setUserMainTag} />
    </div>
  );
};

export default MainWineTagCon;
