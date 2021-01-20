import React from "react";
import { GoogleLogin } from "react-google-login";

export default function Login() {

  return (
    <div>
      <GoogleLogin
        clientId={
          "281364602161-im1mhepaonpqf2l3r2ogp06vsd8aug23.apps.googleusercontent.com"
        }
        buttonText={"login"}
        onSuccess={(auth) => {
            localStorage.setItem("googleAuth", JSON.stringify(auth.tokenObj))
          console.log("success");
          console.log(auth);
        }}
        cookiePolicy={"single_host_origin"}
        onFailure={(e) => {
          console.log(e);
        }}
        accessType={"offline"}
        onLogoutSuccess={() => {console.log('logout success')}}
      />
    </div>
  );
}
