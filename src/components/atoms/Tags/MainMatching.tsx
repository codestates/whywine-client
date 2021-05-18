import React from "react";
// TODO: 사용자가 선택한 태그 / 와인이 가지고 있는 태그 => 매칭률로 환산 세분화가 필요할 듯
//* 태그가 완벽히 일치한다 -> 완전 추천!
//* 태그가 70%이상 일치한다 -> 오늘은 이런 와인 어떠세요?
//* 태그 50~70 일치 -> 추천이 마음에 들지 않나요?
//* 50 이하 -> 이런 와인도 있어요 등등..

const MainMatching = () => {
  return (
    <div>
      <div className="mainMatching">추천 100%</div>
    </div>
  );
};

export default MainMatching;
