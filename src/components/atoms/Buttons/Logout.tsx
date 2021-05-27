import axios from "axios";
import { useHistory } from "react-router-dom";

interface Props {
  setIslogin: any;
}

function Logout({ setIslogin }: Props) {
  const history = useHistory();

  const handleLogout = async () => {
    console.log('로그아웃 작동')
    await axios
        .get(`https://localhost:4000/auth/logout`,
        {withCredentials: true})
        .then((res) => {
          console.log('쿠키삭제성공');
          localStorage.removeItem("token");
          history.push("/");
          setIslogin(false);
        })
        .catch((err) => {
          if (err) {
            console.error();
          }
        });
    
  };

  return (
    <div>
      <div onClick={() => handleLogout()}>로그아웃</div>
    </div>
  );
}

export default Logout;
