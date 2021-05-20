import React from "react";

interface bodyTag {
  wineBody: string;
}

const MainBodyTag: React.FC<bodyTag> = ({ wineBody }) => {
  return (
    <div>
      <h2>바디감</h2>
      <div className="kindOfWine">{wineBody}</div>
    </div>
  );
};

export default MainBodyTag;
