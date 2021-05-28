import React, { useState } from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface WineData {
  category: string;
  randomWine: string[];
}

const MainWineCategory = ({ category, randomWine }: WineData) => {
  let wineData = [
    <MainWineCard randomWine={randomWine[0]} />,
    <MainWineCard randomWine={randomWine[1]} />,
    <MainWineCard randomWine={randomWine[2]} />,
  ];
  const [isTagArr, setIsTagArr] = useState(true);
  const tags: any = localStorage.getItem("userTag");
  if (!tags) {
    setIsTagArr(false);
  }
  return (
    <div>
      {isTagArr ? (
        <div className="mainWineCategory">
          <h2 className="mainCategoryName">{category}</h2>
          <div className="mainWineCardBox">
            <ul className="mainWineCardList">
              {wineData.map((data, index) => {
                return data;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div>추천와인이 없습니다</div>
      )}
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
