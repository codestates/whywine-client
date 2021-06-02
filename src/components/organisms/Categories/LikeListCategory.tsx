import React from "react";
import LikeCard from "../Cards/LikeCard";

interface State {
  userLikeWines: object[];
}
//! className 하나도 변경 안되어 있음. 변경 필요
const LikeListCategory = ({ userLikeWines }: State) => {
  console.log(userLikeWines);
  return (
    <div className="mainSearchCategory">
      <h2 className="mainCategoryName">내 찜 목록</h2>
      <ul className="mainWineSearchBox">
        {userLikeWines.map((wine, idx) => {
          console.log(wine);
          return <LikeCard userLikeWines={wine} key={idx} />;
        })}
      </ul>
    </div>
  );
};

export default LikeListCategory;
