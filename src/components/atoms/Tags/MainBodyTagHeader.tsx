import React from "react";
//? 헤더는 그냥 organism에서 만들까..
//? 하나로 한정짓지 말고 props에따라 헤더를 바꿔주는 것도 좋은 방법일듯
interface tagHeader {
  header: string;
}
const MainBodyTagHeader: React.FC<tagHeader> = ({ header }) => {
  return <h2>{header}</h2>;
};

export default MainBodyTagHeader;
