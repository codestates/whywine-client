import React, { Children } from "react";

interface wineTag {
  wineType: string;
}
const surTypeTag: React.FC<wineTag> = ({ wineType }) => {
  return <div className="kindOfWine">{wineType}</div>;
};
export default surTypeTag;
