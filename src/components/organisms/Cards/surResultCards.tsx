import React, { useEffect, useState } from "react";
import SurResultCardCenter from "../../atoms/Cards/SurResultCardCenter";
import SurResultCardLeft from "../../atoms/Cards/SurResultCardLeft";
import SurResultCardRight from "../../atoms/Cards/SurResultCardRight";

interface WineData {
  randomWine: object[];
}

const surResultCards = ({ randomWine }: WineData) => {
  return (
    <div>
      <div className="resultCardBox">
        <SurResultCardLeft randomWine={randomWine[0]} />
        <SurResultCardCenter randomWine={randomWine[1]} />
        <SurResultCardRight randomWine={randomWine[2]} />
      </div>
    </div>
  );
};

export default surResultCards;
