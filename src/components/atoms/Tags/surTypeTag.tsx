import React, { Children } from "react";

interface typeTag {
  wineType: Array<string>;
  num: number;
}
const surTypeTag: React.FC<typeTag> = ({ wineType, num }) => {
  return (
    <div className="wineTypeBox">
      {wineType.map((type) => {
        return (
          <a
            href={num !== 5 ? `#survey${num + 1}` : "#result"}
            className="wineTypeTag"
          >
            <button>{type}</button>
          </a>
        );
      })}
    </div>
  );
};
export default surTypeTag;
