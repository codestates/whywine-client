import React from "react";

interface nextPrevBtnType {
  btnType: string;
}
//? 메소드로 다음, 뒤로가기 버튼을 재사용해서 활용할 수 있지 않을까?
const surNextPrevBtn: React.FC<nextPrevBtnType> = ({ btnType }) => {
  return (
    <div>
      <button className="surNextPreBtn">{btnType}</button>
    </div>
  );
};

export default surNextPrevBtn;
