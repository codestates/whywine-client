import React from "react";
import LikeListCategory from "../Categories/LikeListCategory";

interface State {
  userLikeWines: object[];
}
const LikeListCon = ({ userLikeWines }: State) => {
  return (
    <div>
      <LikeListCategory userLikeWines={userLikeWines} />
    </div>
  );
};

export default LikeListCon;
