import React from "react";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";

const Bankdetails = () => {
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <div className="signinform">
            <div className="loginform ">
              <h2>Add Your Bank Details</h2>
              <hr />
              <h4> </h4>

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <i className="las la-file-alt"></i>
                  <input type="email" placeholder="Bank account number" />
                </div>

                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input type="email" placeholder="IFSC Code" />
                </div>
                <div className="doctext">
                  <p>Upload Cancel Cheque</p>
                  <div className="docfile">
                    <div className="uploadfile">
                      <i className="las la-cloud-upload-alt"></i>
                    </div>
                    <div className="uploadtext">
                      <p>
                        <span>Click to upload</span>or drag and drop PNG, JPG or Pdf (max size_12mb)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footertext"></div>
              <div className="continue">
                <Link className="button-2" to="/gstin">
                  back
                </Link>
                <Link className="button-3" to="/address">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bankdetails;
