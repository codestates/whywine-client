import React, { useState, useRef, useEffect, createRef } from "react";
import MyAccountBtn from "../../atoms/Buttons/MyAccount";
import MyAccountMenu from "../../atoms/Buttons/MyAccountMenu";

interface LoginState {
  isLogin: boolean;
  openModal: React.MouseEventHandler<HTMLDivElement>;
}
function MyAccount({ isLogin, openModal }: LoginState) {
  const [manuOpen, setMeunOpen] = useState<boolean>(false);

  const maunState = () => {
    setMeunOpen(!manuOpen);
  };
  return (
    <div>
      {!isLogin ? (
        <div className="MyAccount" onClick={openModal}>
          <i className="fas fa-user-circle fa-2x"></i>
          <i className="fas fa-caret-down"></i>
        </div>
      ) : !manuOpen ? (
        <MyAccountBtn maunState={maunState} />
      ) : (
        <>
          <MyAccountBtn maunState={maunState} />
          <MyAccountMenu setMeunOpen={setMeunOpen} />
        </>
      )}
    </div>
  );
}

export default MyAccount;
