import React, { useState, useRef, useEffect, createRef } from "react";
import MyAccountBtn from "../../atoms/Buttons/MyAccount";
import MyAccountMenu from "../../atoms/Buttons/MyAccountMenu";

function MyAccount() {
  const [manuOpen, setMeunOpen] = useState<boolean>(false);


  const maunState = () => {
    setMeunOpen(!manuOpen);

  };
  return (
    <div>
      {!manuOpen ? (
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
