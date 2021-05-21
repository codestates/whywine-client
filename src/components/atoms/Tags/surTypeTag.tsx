import React, { Children } from "react";

interface typeTag {
  wineType: Array<string>;
}
const surTypeTag: React.FC<typeTag> = ({ wineType }) => {
  return (
    <div className="wineTypeBox">
      {wineType.map((type) => {
        return (
          <div className="wineTypeTag">
            <a href="#surFirstBox">{type}</a>
          </div>
        );
      })}
    </div>
  );
};
export default surTypeTag;
