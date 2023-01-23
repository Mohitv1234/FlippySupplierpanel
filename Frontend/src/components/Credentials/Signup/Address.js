import React from "react";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";

function Address() {
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <div className="signinform">
            <div className="loginform createpage " id="addressform">
              <h2>Add Your Address</h2>
              <hr />
              <h4 id="defaultaddress">Default Address </h4>
              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <input type="text" placeholder="Bank account number" />
                </div>

                <div className="inputbox-1">
                  <input type="text" placeholder="IFSC Code" />
                </div>
              </div>
              <div className="inputbox-3">
                <div className="inputbox-3-2"><input type="text" placeholder="Landmark" /></div>
                <div className="inputbox-3-3"><input type="text" placeholder="City" /></div>
              </div>
              <div className="inputbox-3">
                <div className="inputbox-3-2"><input type="text" placeholder="State" /></div>
                <div className="inputbox-3-3 "><input type="text" placeholder="Pin" /></div>
              </div>
              <h4 id="picaddress">Pickup Address </h4>
              <div className="checkbx"><h4 id="sameaddress">Same as default address </h4>
              <div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" /></div>
              </div>
              
              <div className="continue">
                <Link className="button-2" to="/bankdetails">back</Link>
                <Link className="button-3" to="/submitform">Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
