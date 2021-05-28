import React from "react";
import MainWineTags from "../Tags/MainWineTags";

interface Tags {
  userMainTag: string[];
  userTypeTag: string[];
  setUserMainTag: React.Dispatch<React.SetStateAction<string[]>>;
  setTypeTag: React.Dispatch<React.SetStateAction<string[]>>;
}
const MainWineTagCon = ({
  userMainTag,
  setUserMainTag,
  userTypeTag,
  setTypeTag,
}: Tags) => {
  return (
    <div className="mainWineTagCon">
      <MainWineTags
        userMainTag={userMainTag}
        setUserMainTag={setUserMainTag}
        userTypeTag={userTypeTag}
        setTypeTag={setTypeTag}
      />
    </div>
  );
};

export default MainWineTagCon;
