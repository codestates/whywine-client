import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logout from "../../atoms/Buttons/Logout";

export interface Props {
  togleEl: any;
  setMeunOpen: any;
}

function MyAccountMenu({ togleEl, setMeunOpen }: Props) {
  const history = useHistory();
  const [isLogin, setIslogin] = useState<boolean>(false);

  useEffect(() => {
    let login: any = sessionStorage.getItem("login");
    if (JSON.parse(login)) {
      setIslogin(true);
    } else if (!JSON.parse(login) && !login) {
      setIslogin(false);
      if (!isLogin) {
        sessionStorage.removeItem("userInfo");
      }
    }
  });

  return (
    <div className="togle">
      <div className="menuWrapper">
        <div onClick={() => history.push("userInfo")}>마이페이지</div>
        <div onClick={() => history.push("likeList")}>내 찜 목록</div>
        <div>장바구니</div>
        <div>
          <Logout setIslogin={setIslogin} />
        </div>
      </div>
    </div>
  );
}

export default MyAccountMenu;
