import React, { useState } from "react";

const MainAcidityTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);

  const handleAcidityTagClick = (e: any) => {
    switch (e.target.textContent) {
      case "낮은":
        setLow(!low);
        if (high === true) {
          setHigh(!high);
        } else if (mid === true) {
          setMid(!mid);
        }
        break;
      case "적당한":
        setMid(!mid);
        if (high === true) {
          setHigh(!high);
        } else if (low === true) {
          setLow(!low);
        }
        break;
      case "높은":
        setHigh(!high);
        if (mid === true) {
          setMid(!mid);
        } else if (low === true) {
          setLow(!low);
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="mainWineAcidityBox">
      <span className="toolTip">
        산미
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>
      <div className="mainWineTypeTags">
        <div
          className={low ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleAcidityTagClick}
        >
          낮은
        </div>
        <div
          className={mid ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleAcidityTagClick}
        >
          적당한
        </div>
        <div
          className={high ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleAcidityTagClick}
        >
          높은
        </div>
      </div>
    </div>
  );
};

export default MainAcidityTag;
