import React from "react";
import SurTypeTag from "../../atoms/Tags/surTypeTag";

export default function surTypeTags() {
  return (
    <div>
      <div className="surTypeTags">
        <SurTypeTag wineType={["레드", "화이트", "로제", "스파클링"]} />
      </div>
    </div>
  );
}
// TODO: 사용자가 태그를 선택하면 로컬스토리지에 저장해주어야 함. 설문 flow가 완료되면 작업할 예정
