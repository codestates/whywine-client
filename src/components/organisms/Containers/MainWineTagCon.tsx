import React from "react";
import MainWineTags from "../Tags/MainWineTags";

interface Tags {
  userMainTag: string[];
  userTypeTag: string[];
  setUserMainTag: React.Dispatch<React.SetStateAction<string[]>>;
  setTypeTag: React.Dispatch<React.SetStateAction<string[]>>;
  tags: any;
}
const MainWineTagCon = ({
  userMainTag,
  setUserMainTag,
  userTypeTag,
  setTypeTag,
  tags,
}: Tags) => {
  return (
    <div className="mainWineTagCon">
      <MainWineTags
        userMainTag={userMainTag}
        setUserMainTag={setUserMainTag}
        userTypeTag={userTypeTag}
        setTypeTag={setTypeTag}
        tags={tags}
      />
    </div>
  );
};

export default MainWineTagCon;
