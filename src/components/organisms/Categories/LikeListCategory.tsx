import React, { useEffect, useState } from "react";
import LikeCard from "../Cards/LikeCard";
import LikeEmpty from "../../../img/like_empty.png";
import GoBackBtnFromLikeList from "../../atoms/Buttons/GoBackBtnFromLikeList";
interface State {
  userLikeWines: object[];
  scroll: boolean;
  handleScrollDown: () => void;
}
//! className 하나도 변경 안되어 있음. 변경 필요
const LikeListCategory = ({
  userLikeWines,
  scroll,
  handleScrollDown,
}: State) => {
  console.log(userLikeWines);
  return (
    <div>
      {userLikeWines.length === 0 ? (
        <div className="mainSearchCategory">
          <img src={LikeEmpty} style={{ width: "60rem" }} />
        </div>
      ) : userLikeWines.length > 4 ? (
        <div className="mainSearchCategory">
          <div className="mainCategoryName">
            <h2>내 찜 목록</h2>
            <GoBackBtnFromLikeList />
          </div>
          <ul className="mainWineLikeBox">
            {userLikeWines.map((wine, idx) => {
              return <LikeCard userLikeWines={wine} key={idx} />;
            })}
          </ul>
          <div
            className="scroll-down"
            style={{
              marginLeft: "8rem",
              opacity: scroll ? "0" : "1",
            }}
            onScroll={handleScrollDown}
          >
            <div>
              <i className="fas fa-angle-down animated bounce"></i>
            </div>
            <p>SCROLL DOWN</p>
          </div>
        </div>
      ) : (
        <div className="mainSearchCategory">
          <div className="mainCategoryName">
            <h2>내 찜 목록</h2>
          </div>
          <ul className="mainWineLikeBox">
            {userLikeWines.map((wine, idx) => {
              return <LikeCard userLikeWines={wine} key={idx} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LikeListCategory;
