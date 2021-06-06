import React from "react";

interface Props {
  text1: string;
  text2: string;
  text3?: string;
}

export default function surMainText({ text1, text2, text3 }: Props) {
  return (
    <div>
      <div className="surMainText">
        <div>{text1}</div>
        <div>{text2}</div>
        <div>{text3}</div>
      </div>
    </div>
  );
}
//안녕하세요 와알못 여러분, 저희 사이트는 와인을 잘 모르는 초심자 분들을 위해 자신에게 어울리는 와인을 소개하는 사이트 입니다.
