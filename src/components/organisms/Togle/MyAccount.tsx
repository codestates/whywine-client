import React, { useState, useRef, useEffect } from "react";
import MyAccountBtn from "../../atoms/Buttons/MyAccount";
import MyAccountMenu from "../../atoms/Buttons/MyAccountMenu";

function MyAccount() {
  const [manuOpen, setMeunOpen] = useState<boolean>(false);
  const togleEl: any = useRef();

  const handleClickOutside = (e: any) => {
    if (manuOpen && !togleEl.current.contains(e.target)) {
      setMeunOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div ref={togleEl}>
      {!manuOpen ? (
        <MyAccountBtn togleEl={togleEl} setMeunOpen={setMeunOpen} />
      ) : (
        <>
          <MyAccountBtn togleEl={togleEl} setMeunOpen={setMeunOpen} />
          <MyAccountMenu togleEl={togleEl} setMeunOpen={setMeunOpen} />
        </>
      )}
    </div>
  );
}

export default MyAccount;
