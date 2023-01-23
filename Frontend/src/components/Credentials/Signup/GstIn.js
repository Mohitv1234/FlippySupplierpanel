import React from "react";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";

const GstIn = () => {
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <div className="signinform">
            <div className="loginform ">
              <h2>Verify Your GSTIN</h2>
              <hr />

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <i className="las la-file-alt"></i>
                  <input type="email" placeholder="Enter GSTIN" />
                </div>

                <div className="inputbox-1">
                  <i className="las la-credit-card"></i>
                  <input type="email" placeholder="Enter pan number" />
                </div>
              </div>
              <div className="doctext">
                <p>Upload Your Pancard</p>
                <div className="docfile">
                    <div className="uploadfile">
                    <i className="las la-cloud-upload-alt"></i>
                    </div>
                    <div className="uploadtext">
                        <p><span>Click to upload </span> or drag and drop PNG, JPG or Pdf (max size_12mb)</p>
                    </div>
                </div>
              </div>

              <div className="footertext"></div>
              <div className="continue">
                <Link className="button-2" to="/signup">
                  back
                </Link>
                <Link className="button-3" to="/bankdetails">
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

export default GstIn;
