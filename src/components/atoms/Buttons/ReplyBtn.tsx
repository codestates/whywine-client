import React, { useState } from "react";
import SignInModal from "../../organisms/Modal/SignInModal";

const ReplyBtn = () => {
  const [signInOpen, setsSignIn] = useState(false);

  return (
    <div>
      {/* <SignInModal isOpen={signInOpen} closeModal={() => setsSignIn(false)} /> */}
      <button
        // onClick={() => (isGuset ? setsSignIn(true) : undefined)}
        className="replyBtn"
      >
        답글
      </button>
    </div>
  );
};

export default ReplyBtn;
