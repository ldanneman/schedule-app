import React from "react";
import { GoogleLogin } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  return (
    <div>
      <GoogleLogin
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="main-login"
            disabled={renderProps.disabled}
          >
            <FontAwesomeIcon icon={faGoogle} />{" Login with Google"}
          </button>
        )}
        clientId={
          "281364602161-im1mhepaonpqf2l3r2ogp06vsd8aug23.apps.googleusercontent.com"
        }
        buttonText={"login"}
        onSuccess={(auth) => {
        let googleAuth = auth.tokenObj;
        googleAuth.scope = 'https://www.googleapis.com/auth/calendar';
        googleAuth.expiry_date = new Date().getMilliseconds() + 86400000;
          localStorage.setItem("googleAuth", JSON.stringify(googleAuth));
          console.log("success");
          console.log(auth);
        }}
        cookiePolicy={"single_host_origin"}
        onFailure={(e) => {
          console.log(e);
        }}
        accessType={"offline"}
        onLogoutSuccess={() => {
          console.log("logout success");
        }}
      />
    </div>
  );
}
