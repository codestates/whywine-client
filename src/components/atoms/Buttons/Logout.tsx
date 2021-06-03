import axios from "axios";
import { useHistory } from "react-router-dom";
import dotenv from "dotenv";
import { useEffect } from "react";

dotenv.config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";
//${server}
interface Props {
  setIslogin: any;
}

function Logout({ setIslogin }: Props) {
  const history = useHistory();

  const handleLogout = async () => {
    await axios
      .get(`${server}/auth/logout`, { withCredentials: true })
      .then((res) => {
        console.log("쿠키삭제성공");
        let login: any = sessionStorage.getItem("login");
        if (JSON.parse(login)) {
          sessionStorage.setItem("login", JSON.stringify(false));
          sessionStorage.removeItem("userInfo");
        }

        history.push("/");
        setIslogin(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div onClick={() => handleLogout()}>로그아웃</div>
    </div>
  );
}

export default Logout;
