import React from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface categoryType {
  category: string;
}

const MainWineCategory: React.FC<categoryType> = ({ category }) => {
  let wineData = [<MainWineCard />, <MainWineCard />, <MainWineCard />];
  //! infinite를 사용하고 싶으면 와인 데이터를 불러 올때 wineData.length > 3 이런식으로 설정해주어야함

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  //! 와인 카드가 3개 이상이여야만 Slider 정상 작동...
  return (
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
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
