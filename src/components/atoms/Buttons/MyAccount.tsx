import { useState } from "react";

export interface Props {
  setMeunOpen: any;
  togleEl: any;
}

function MyAccount({ setMeunOpen, togleEl }: Props) {
  return (
    <div ref={togleEl} className="MyAccount" onClick={() => setMeunOpen(true)}>
      <i className="fas fa-user-circle fa-2x"></i>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default MyAccount;
