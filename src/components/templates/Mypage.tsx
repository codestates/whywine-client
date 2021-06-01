import * as React from "react";
import Header from "../organisms/Header/Header";

function Mypage() {
  const handleSearchInput = (e: any) => {};
  const handleClickSearchBtn = () => {};
  return (
    <div>
      <Header
        handleSearchInput={handleSearchInput}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      <h1>마이페이지</h1>
      <div>이메일</div>
      <div>닉네임</div>
      <div>비밀번호</div>
      <div>사진</div>
    </div>
  );
}

export default Mypage;
