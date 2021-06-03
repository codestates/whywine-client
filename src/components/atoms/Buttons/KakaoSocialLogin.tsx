import KakaoIcon from "../../../img/kakao.png"
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";
export default function KakaoLogin() {
  const KakaoLoginHandler = () => {
    window.location.assign(`${server}/auth/kakao`);
  };

  return (
    <button className="socialButtons">
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans"
        />
        <div className="Kakao-btn" onClick={KakaoLoginHandler}>
          <img
            className="google-icon"
            src={KakaoIcon}
          />
          <div>Kakao Login</div>
        </div>
      </div>
    </button>
  );
}
