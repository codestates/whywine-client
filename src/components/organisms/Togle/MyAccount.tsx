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
    <div>
      {!manuOpen ? (
        <MyAccountBtn setMeunOpen={setMeunOpen} />
      ) : (
        <>
          <MyAccountBtn setMeunOpen={setMeunOpen} />
          <MyAccountMenu togleEl={togleEl} />
        </>
      )}
    </div>
  );
}

export default MyAccount;
