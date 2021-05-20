import React from "react";
//TODO: 리셋 버튼을 누르면 저장되어있는 태그가 전부 리셋.. 로컬스토리지로 가능할까? 아니면 데이터베이스 수정하는 걸로
const MainResetTagBtn = () => {
  return (
    <div>
      <button className="mainResetTagBtn">리셋</button>
    </div>
  );
};

export default MainResetTagBtn;
