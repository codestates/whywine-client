import React, { useState } from "react";
import SignInModal from "../../organisms/Modal/SignInModal";

const ReplyBtn = () => {
  const [signInOpen, setsSignIn] = useState(false);

  return (
    <div>
      <button
        className="replyBtn"
        onClick={() => alert("서비스 준비중 입니다.")}
      >
        답글
      </button>
    </div>
  );
};

export default ReplyBtn;
