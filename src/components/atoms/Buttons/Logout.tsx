import axios from "axios";
import { useHistory } from "react-router-dom";

interface Props {
  setIslogin: any;
}

function Logout({ setIslogin }: Props) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
    setIslogin(false);
  };

  return (
    <div>
      <div onClick={() => handleLogout()}>로그아웃</div>
    </div>
  );
}

export default Logout;
