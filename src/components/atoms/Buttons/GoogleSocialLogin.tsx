import GoogleIcon from "../../../img/google.png";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";
export default function GoogleLogin() {
  const googleLoginHandler = () => {
    window.location.assign(`${server}auth/google`);
  };

  return (
    <button className="socialButtons googleStyle">
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans"
        />
        <div className="google-btn" onClick={googleLoginHandler}>
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          <div>Google Login</div>
        </div>
      </div>
    </button>
  );
}
