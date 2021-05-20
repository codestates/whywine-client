import { useState } from "react";
import Title from "../../atoms/Title/Title";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import SignIn from "../../atoms/Buttons/SignIn";
import SignUp from "../../atoms/Buttons/SignUp";
import SingInModal from "../Modal/SingInModal";
import SignUpModal from "../Modal/SingUpModal";

// interface Props {
//   isOpen: boolean;
// }

function LandingHeader() {
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);

  const openSignInModal: any = () => {
    setSignInOpen(true);
  };
  const closeSignInModal: any = () => {
    setSignInOpen(false);
  };

  const openSignUpModal: any = () => {
    setSignUpOpen(true);
  };
  const closeSignUpModal: any = () => {
    setSignUpOpen(false);
  };

  return (
    <div className="LandingHeader">
      <Title />
      <div>
        <SignIn openModal={openSignInModal} />
        <SignUp openModal={openSignUpModal} />
        <GoToMainBtn />
      </div>
      <SingInModal isOpen={signInOpen} closeModal={closeSignInModal} />
      <SignUpModal isOpen={signUpOpen} closeModal={closeSignUpModal} />
    </div>
  );
}

export default LandingHeader;
