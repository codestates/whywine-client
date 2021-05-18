import React from "react";

interface bodyTag {
  wineBody: string;
}

const mainBodyTag: React.FC<bodyTag> = ({ wineBody }) => {
  return (
    <div>
      {" "}
      return <div className="kindOfWine">{wineBody}</div>;
    </div>
  );
};

export default mainBodyTag;
