import React from "react";
interface typeTag {
  wineType: Array<string>;
}
const MainTypeTag: React.FC<typeTag> = ({ wineType }) => {
  return (
    <div className="mainWineTypeBox">
      <h2>와인 타입</h2>

      {wineType.map((type) => {
        return <div className="mainWineTypeTag">{type}</div>;
      })}
    </div>
  );
};

export default MainTypeTag;
