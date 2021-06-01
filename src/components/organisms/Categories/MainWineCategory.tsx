import React, { useState } from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WineData {
  randomWine: object[];
}
const MainWineCategory = ({ randomWine }: WineData) => {
  // let wineData = [
  //   <MainWineCard randomWine={randomWine[0]} />,
  //   <MainWineCard randomWine={randomWine[1]} />,
  //   <MainWineCard randomWine={randomWine[2]} />,
  // ];

  const [isTagArr, setIsTagArr] = useState(true);
  const tags: any = localStorage.getItem("userTag");
  if (!tags) {
    setIsTagArr(false);
  }
  // TODO Loading에 이미지 파일 주기
  return (
    <div>
      {isTagArr ? (
        <div className="mainWineCategory">
          <h2 className="mainCategoryName">
            당신을 위한 <span>완벽한 와인</span>
          </h2>
          <ul className="mainWineCardBox">
<<<<<<< HEAD
            {[1, 2, 3].map((data, index) => {
              return (
                <MainWineCard randomWine={randomWine[index]} key={index} />
              );
            })}
=======
            {randomWine.length === 0 ? (
              <div style={{ width: "1260px" }}>Loading...</div>
            ) : (
              [1, 2, 3].map((data, index) => {
                return (
                  <MainWineCard randomWine={randomWine[index]} key={index} />
                );
              })
            )}

>>>>>>> 55c2d8d6cae387dabfa901d176a0b90234d9d705
          </ul>
        </div>
      ) : (
        <div>추천와인이 없습니다 </div>
      )}
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
