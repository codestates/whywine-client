import React from "react";
import MainWineCard from "../../atoms/Cards/MainWineCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { url } from "inspector";
import rightArrow from "../../../img/arrow_right.svg";

interface categoryType {
  category: string;
}

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
  const settings = {
    dots: true,
    infinite: true,
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
  return (
    <div className="mainWineCategory">
      <h2 className="mainCategoryName">{category}</h2>
      <div className="mainWineCardBox">
        <Slider {...settings}>
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
          <MainWineCard />
        </Slider>
      </div>
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
