import React from "react";
import LikeListCategory from "../Categories/LikeListCategory";

interface State {
  userLikeWines: object[];
  scroll: boolean;
  handleScrollDown: () => void;
}
const LikeListCon = ({ userLikeWines, scroll, handleScrollDown }: State) => {
  return (
    <div>
      <LikeListCategory
        userLikeWines={userLikeWines}
        scroll={scroll}
        handleScrollDown={handleScrollDown}
      />
    </div>
  );
};

export default LikeListCon;
