import React from "react";
import SurTypeTag from "../../atoms/Tags/surTypeTag";

interface Props {
  num: number;
}

export default function surTypeTags({ num }: Props) {
  // const tannins: object = {
  //   smooth: "밀린 업무 끝! 상쾌하다",
  //   medium: "오늘은 버스말고 택시탈까?",
  //   tannic: "하 인생..",
  // };

  // const acidity: object = {
  //   soft: "안주는 사치야",
  //   medium: "아무거나 괜찮아",
  //   acidic:"고급진 스테이크"
  // };

  // const sweetness: object = {
  //   dry:"씁쓸",
  //   medium:"담백",
  //   sweet:"달달"
  // }

  return (
    <SurTypeTag num={num} wineType={["레드", "화이트", "로제", "스파클링"]} />
  );
}

// TODO: 사용자가 태그를 선택하면 로컬스토리지에 저장해주어야 함. 설문 flow가 완료되면 작업할 예정

// "taste": {
//   "body": ["light", "medium", "bold"],
//   "tannins": ["smooth", "medium", "tannic"],
//   "acidity": ["soft", "medium", "acidic"],
//   "sweetness": ["dry", "medium", "sweet"],
//   "sparkling": ["gentle", "medium", "fizzy"]
