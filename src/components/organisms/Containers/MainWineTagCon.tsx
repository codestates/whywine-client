import React from "react";
import MainWineTags from "../Tags/MainWineTags";

interface Tags {
  userMainTag: string[];
  userTypeTag: string[];
  handleSetUserTag: (userTag: string[]) => void;
  setTypeTag: React.Dispatch<React.SetStateAction<string[]>>;
  tags: any;
}
const MainWineTagCon = ({
  userMainTag,
  handleSetUserTag,
  userTypeTag,
  setTypeTag,
  tags,
}: Tags) => {
  return (
    <div className="mainWineTagCon">
      <MainWineTags
        userMainTag={userMainTag}
        handleSetUserTag={handleSetUserTag}
        userTypeTag={userTypeTag}
        setTypeTag={setTypeTag}
        tags={tags}
      />
    </div>
  );
};

export default MainWineTagCon;
