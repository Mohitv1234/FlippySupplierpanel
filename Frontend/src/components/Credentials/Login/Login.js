import React from "react";
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";

const Login = ( ) => {
  return (
    <>
      <div className="loginComp ">
        <LeftBanner />
        <div className="rightComp">
          <div className="userSinUpMain">
            <div className="userSinUp">
              <a href = " ">Don't have an account?</a>
              <Link to="/signup">
                <button><i className="las la-user"></i>Sign up</button></Link>
            </div>
          </div>
          <div className="signinform">
            <div className="loginform">
              <i className="las la-user"></i>
              <h1>Login to your supplier panel</h1>
              <p>Welcome back, you’ve been missed!</p>

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <i className="las la-user"></i>
                  <input type="email" placeholder=" Email or Mobile Number" />
                </div>
                
                <div className="inputbox-2">
                  <i className="las la-lock"></i>
                  <input className="" type="password" placeholder="password" />
                  <i className="las la-eye"></i>
                </div>
              </div>

              <div className="forgetusr mt-2">
                <p>Remember me</p>
                <Link to="/forgotepass" > Forget Password?</Link>
              </div>
              <button className="button mt-3">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
