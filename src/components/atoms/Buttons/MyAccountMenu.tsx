import { useState } from "react";
import { useHistory } from "react-router-dom";
export interface Props {
  togleEl: any;
}

function MyAccountMenu({ togleEl }: Props) {
  const history = useHistory();

  return (
    <div className="togle">
      <div className="menuWrapper" ref={togleEl}>
        <div ref={togleEl} onClick={() => history.push("userInfo")}>
          마이페이지
        </div>
        <div>내찜목록</div>
        <div>장바구니</div>
      </div>
    </div>
  );
}

export default MyAccountMenu;
