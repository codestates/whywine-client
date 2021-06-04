import React, { useState, useEffect } from "react";
import card from "../../../img/wine_sample.png";
import ReactCardFlip from "react-card-flip";
import Rating from "../../organisms/Ratings/Rating";

interface WineData {
  randomWine: any;
}
let name: string,
  id: number,
  likeCount: number,
  description: string,
  image: string,
  price: number,
  sort: string,
  tags: object[],
  rating_avg: number;
const SurResultCardRight = ({ randomWine }: WineData) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpacity, setIsOpacity] = useState<boolean>(false);
  const [isUpload, setIsUpload] = useState(false);

  if (randomWine) {
    name = randomWine.name;
    id = randomWine.id;
    likeCount = randomWine.likeCount;
    description = randomWine.description;
    image = process.env.REACT_APP_WINE_IMAGE_URL + randomWine.image;
    price = randomWine.price;
    tags = randomWine.tags;
    sort = randomWine.sort;
    rating_avg = randomWine.rating_avg;
  }

  const rotateCard = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    setIsOpacity(true);
  }, []);
  const handleUploadImg = () => {
    setTimeout(() => setIsUpload(true), 300);
  };
  useEffect(() => {
    handleUploadImg();
    return () => {
      setIsUpload(false);
    };
  }, [tags]);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="frontCard">
        <img
          style={{
            opacity: isOpacity ? "1" : "0",
            width: "300px",
          }}
          className="cardRight"
          src={card}
          alt="추천 와인 카드"
          onClick={rotateCard}
        />
      </div>

      <div className="backCard">
        <div className="resultWineCard" onClick={rotateCard}>
          <Rating rating_avg={rating_avg} />
          <div className="mainWineProfile">
            {image ? (
              <img src={image} alt="와인" className={"wineMainImg"} />
            ) : null}

            <div className="mainWineContent">
              {name ? (
                name.length >= 30 ? (
                  <div className="moreThan30">{name}</div>
                ) : (
                  <div className="lessThan30">{name}</div>
                )
              ) : null}
              <p>{description}</p>
            </div>
          </div>

          <div className="mainWineData">
            <div className="mainWineType">
              {sort === "red"
                ? " 레드"
                : sort === "white"
                ? " 화이트"
                : sort === "rose"
                ? " 로제"
                : sort === "sparkling"
                ? " 스파클링"
                : null}
            </div>
            <div className="mainWineLikeTagBox">
              <div className="mainWineTag">
                {tags
                  ? tags.map((tag: any) => {
                      switch (tag.name) {
                        case "body_light":
                          return " #가벼운";
                        case "body_medium":
                          return "";
                        case "body_bold":
                          return " #무거운";
                        case "tannins_smooth":
                          return " #부드러운";
                        case "tannins_medium":
                          return "";
                        case "tannins_tannic":
                          return " #떫은";
                        case "acidity_soft":
                          return " #산미가 적은";
                        case "acidity_medium":
                          return "";
                        case "acidity_acidic":
                          return " #산미가 높은";
                        case "sweetness_dry":
                          return " #씁쓸한";
                        case "sweetness_medium":
                          return "";
                        case "sweetness_sweet":
                          return "#달달한";
                        default:
                          break;
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default SurResultCardRight;
