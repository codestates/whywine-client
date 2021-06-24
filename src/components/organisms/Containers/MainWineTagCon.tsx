import React from "react";
import MainWineTags from "../Tags/MainWineTags";

interface Tags {
  userMainTag: string[];
  userTypeTag: string[];
  handleSetUserTag: (userTag: string[]) => void;
  handleSetTypeTag: (typeTag: string[]) => void;
  tags: any;
}
const MainWineTagCon = ({
  userMainTag,
  handleSetUserTag,
  userTypeTag,
  handleSetTypeTag,
  tags,
}: Tags) => {
  return (
    <div className="mainWineTagCon">
      <MainWineTags
        userMainTag={userMainTag}
        handleSetUserTag={handleSetUserTag}
        userTypeTag={userTypeTag}
        handleSetTypeTag={handleSetTypeTag}
        tags={tags}
      />
    </div>
  );
};

export default MainWineTagCon;
