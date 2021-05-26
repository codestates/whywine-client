import axios from "axios";
import { useHistory } from "react-router-dom";

interface Props {
  setIslogin: any;
}

function Logout({ setIslogin }: Props) {
  const history = useHistory();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await axios
        .get(`https://localhost:4000/auth/logout`)
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          if (err) {
            console.error();
          }
        });
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
