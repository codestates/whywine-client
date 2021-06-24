import { useState } from "react";

export interface Props {
  maunState: () => void;
}

function MyAccount({ maunState }: Props) {
  return (
    <div className="MyAccount" onClick={() => maunState()}>
      <i className="fas fa-user-circle fa-2x"></i>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default MyAccount;
