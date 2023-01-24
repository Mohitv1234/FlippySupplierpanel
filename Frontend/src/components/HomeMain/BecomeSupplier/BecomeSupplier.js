import React from "react";
import DoneIcon from "@mui/icons-material/Done";
const BecomeSupplier = () => {
  return (
    <>
      <div className="suppliercontainer">
        <div className="rightimage"></div>
        <div className="leftcontent">
          <div id="top">
            <div id="suppliere_heading">
              <h1>Become Supplier</h1>
            </div>
            <div id="suppliere_content">
              <p>
                Become a Flippy 7 seller and grow your business <br /> across
                india
              </p>
            </div>
          </div>
          <div id="middle">
            <div id="numberofSupplier">
              <DoneIcon  id="check" />
              <h3>6 Lakh+ Trust Flippy 7 to sell online</h3>
            </div>
            <div id="numberofSupplier">
              <DoneIcon  id="check"/>
              <h3>11 crore+ Customers buying across india </h3>
            </div>
            <div id="numberofSupplier">
              <DoneIcon  id="check"/>
              <h3>28000+ Pincode Supported for delivery</h3>
            </div>
            <div id="numberofSupplier">
              <DoneIcon  id="check"/>
              <h3>700+ Category to sell online</h3>
            </div>
          </div>

          <div id="bottom">
            <button>
              <i class="las la-cube"></i>
              <h4>Strart Selling</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeSupplier;
