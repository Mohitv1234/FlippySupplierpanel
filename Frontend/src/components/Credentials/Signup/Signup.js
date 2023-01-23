import React from "react";
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";


const Signup = () => {
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <div className="signinform">
            <div className="loginform createpage">
              <h3>
                Create an account to start selling on <span>Flipp7</span>
              </h3>
              <hr />
              <div className="inputfrm mt-2 ">
                <div className="inputbox-2">
                  <i className="las la-phone"></i>
                  <input
                    className=""
                    type="text"
                    placeholder="Enter mobile number"
                  />
                  <span>Verify</span>
                </div>
                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input type="text" placeholder="Enter Otp" />
                </div>
                <div className="inputbox-2">
                  <i className="las la-comment-alt"></i>
                  <input
                    className=""
                    type="text"
                    placeholder="Enter email address"
                  />
                  <span>Verify</span>
                </div>
                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input type="text" placeholder="Enter Otp" />
                </div>
                <div className="inputbox-2">
                  <i className="las la-lock"></i>
                  <input
                    className=""
                    type="text"
                    placeholder="Password"
                  />
                  <i className="las la-low-vision"></i>
                </div>
              </div>

              <div className="footertext">
                <h4>
                  By continuing, i agree to flippy7's Term of Use & Privacy policy
                </h4>
              </div>

              <Link className="buttonn" to="/gstin">
                <button>Create Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
