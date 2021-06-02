import React from "react";
import LikeCard from "../Cards/LikeCard";
import LikeEmpty from "../../../img/like_empty3.png";
interface State {
  userLikeWines: object[];
}
//! className 하나도 변경 안되어 있음. 변경 필요
const LikeListCategory = ({ userLikeWines }: State) => {
  console.log(userLikeWines);
  return (
    <div>
      {userLikeWines.length !== 0 ? (
        <div className="mainSearchCategory">
          <h2 className="mainCategoryName">내 찜 목록</h2>
          <ul className="mainWineSearchBox">
            {userLikeWines.map((wine, idx) => {
              console.log(wine);
              return <LikeCard userLikeWines={wine} key={idx} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="mainSearchCategory">
          <h2 className="mainCategoryName">내 찜 목록</h2>
          <img src={LikeEmpty} style={{ height: "400px", width: "400px" }} />
          <h2>찜한 와인이 없습니다. </h2>
          <h2>찜하기 버튼을 눌러 나만의 찜 목록을 만들어보세요.</h2>
        </div>
      )}
    </div>
  );
};

export default LikeListCategory;
