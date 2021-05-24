import { useState } from "react";

export interface Props {
  setMeunOpen: any;
}

function MyAccount({ setMeunOpen }: Props) {
  return (
    <div className="MyAccount" onClick={() => setMeunOpen(true)}>
      <i className="fas fa-user-circle fa-2x"></i>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default MyAccount;
