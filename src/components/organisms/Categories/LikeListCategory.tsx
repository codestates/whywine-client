import React, { useEffect, useState } from "react";
import LikeCard from "../Cards/LikeCard";
import LikeEmpty from "../../../img/wine_like_empty.png";
import Footer from "../Footer/Footer";
interface State {
  userLikeWines: object[];
}
//! className 하나도 변경 안되어 있음. 변경 필요
const LikeListCategory = ({ userLikeWines }: State) => {
  const [scroll, setScroll] = useState(false);
  const handleScrollDown = () => {
    setScroll(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  });
  return (
    <div>
      {userLikeWines.length === 0 ? (
        <div className="mainSearchCategory">
          <img src={LikeEmpty} style={{ height: "400px", width: "400px" }} />
        </div>
      ) : userLikeWines.length > 4 ? (
        <div className="mainSearchCategory">
          <div className="mainCategoryName">
            <h2>내 찜 목록</h2>
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
      <Footer />
    </div>
  );
};

export default LikeListCategory;
