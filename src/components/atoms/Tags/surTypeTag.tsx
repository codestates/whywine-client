import React, { Children } from "react";

interface typeTag {
  wineType: string;
}
const surTypeTag: React.FC<typeTag> = ({ wineType }) => {
  return <div className="kindOfWine">{wineType}</div>;
};
export default surTypeTag;
