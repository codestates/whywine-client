import React from "react";
import MainWineCard from "../Cards/MainWineCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "../../../img/arrow_right.svg";

interface categoryType {
  category: string;
}

//! 커스텀 arrow사용하는 함수 나중에 결정이 나면 atoms로 옮겨야 함
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{
        ...style,
        marginRight: "40px",
        width: "40px",
        fontSize: "40px",
      }}
      src={rightArrow}
      onClick={onClick}
    />
  );
}

const MainWineCategory: React.FC<categoryType> = ({ category }) => {
  let wineData = [
    <MainWineCard />,
    <MainWineCard />,
    <MainWineCard />,
    <MainWineCard />,
    <MainWineCard />,
  ];
  //! infinite를 사용하고 싶으면 와인 데이터를 불러 올때 wineData.length > 3 이런식으로 설정해주어야함
  const settings = {
    dots: true,
    infinite: wineData.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  //! 와인 카드가 3개 이상이여야만 Slider 정상 작동...
  return (
    <div className="mainWineCategory">
      <h2 className="mainCategoryName">{category}</h2>
      <div className="mainWineCardBox">
        <Slider {...settings}>
          {wineData.map((data) => {
            return data;
          })}
        </Slider>
      </div>
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
