import React, { useEffect, useState } from "react";
import SurResultCardCenter from "../../atoms/Cards/SurResultCardCenter";
import SurResultCardLeft from "../../atoms/Cards/SurResultCardLeft";
import SurResultCardRight from "../../atoms/Cards/SurResultCardRight";

const surResultCards = () => {
  return (
    <div>
      <div className="resultCardBox">
        <SurResultCardLeft />
        <SurResultCardCenter />
        <SurResultCardRight />
      </div>
    </div>
  );
};

export default surResultCards;
