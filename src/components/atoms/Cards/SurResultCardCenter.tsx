import React, { useState, useEffect } from "react";
import card from "../../../img/wine_sample.png";
import cardSample from "../../../img/whywine_card_sample.png";
import ReactCardFlip from "react-card-flip";

const SurResultCardCenter = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpacity, setIsOpacity] = useState<boolean>(false);

  const rotateCard = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    setIsOpacity(true);
  }, []);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="frontCard">
        <img
          style={{
            opacity: isOpacity ? "1" : "0",
            width: "300px",
          }}
          className="cardCenter"
          src={card}
          alt="추천 와인 카드"
          onClick={rotateCard}
        />
      </div>

      <div className="backCard">
        <img
          className="wine"
          src={cardSample}
          alt="레드 와인 샘플"
          onClick={rotateCard}
        />
      </div>
    </ReactCardFlip>
  );
};

export default SurResultCardCenter;
