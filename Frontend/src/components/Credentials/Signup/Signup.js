import React, { useState } from "react";
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link, Navigate } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { clearErrors, registerSeller } from "../../../Actions/SellerActions";

const Signup = () => {

  const dispatch = useDispatch();
  const alert =useAlert()
  // register seller
  const {success} = useSelector((state)=>state.registerSeller)



  const [sellerData,setSellerData] = useState({
   
    phone:"",
    otp_mobile:"",
    email:"",
    otp_email:"",
    password:""
  });
  
  
  
  
  const handleInputs =(e)=>{
    const name =e.target.name
    const value = e.target.value
    setSellerData({...sellerData,[name]:value })
  }





  useEffect(() => {
   


    if(success){
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
             Registered Successfully
            </div>
      )
      Navigate("/")
     
    }
   
  

  }, [dispatch,alert, Navigate, success]);









  const submitRegisterSeller =(e)=>{
   e.preventDefault()
   dispatch(registerSeller(sellerData))

  }
  


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
                    required
                    placeholder="Enter mobile number"
                    name="phone"
                    onChange={handleInputs}
                    value={sellerData.phone} 
                  />
                  <span>Verify</span>
                </div>
                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input type="text" placeholder="Enter Otp" 
                  name="otp_mobile"
                  onChange={handleInputs}
                  required
                  value={sellerData.otp_mobile}
                  />
                </div>
                <div className="inputbox-2">
                  <i className="las la-comment-alt"></i>
                  <input
                    className=""
                    type="text"
                    required
                    placeholder="Enter email address"
                    name="email"
                    onChange={handleInputs}
                    value={sellerData.email}
                  />
                  <span>Verify</span>
                </div>
                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input type="text" placeholder="Enter Otp" 
                   name="otp_email"
                   onChange={handleInputs}
                   value={sellerData.otp_email}
                   required
                  />
                </div>
                <div className="inputbox-2">
                  <i className="las la-lock"></i>
                  <input
                    className=""
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputs}
                    value={sellerData.password}
                    required
                  />
                  <i className="las la-low-vision"></i>
                </div>
              </div>

              <div className="footertext">
                <h4>
                  By continuing, i agree to flippy7's Term of Use & Privacy policy
                </h4>
              </div>

              <Link className="buttonn" >
                <button onClick={submitRegisterSeller} type="submit">Create Account</button>
              </Link>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Signup;