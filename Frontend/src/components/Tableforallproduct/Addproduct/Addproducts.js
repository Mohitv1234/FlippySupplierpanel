import React from "react";
import Secondnavproduct from "./Secondnavproduct";
import "./stylefortext.css";
import Leftaddproduct from "./Leftaddproduct";
import Rightaddproduct from './rightaddproduct.js';
export default function Addproducts() {
  return (
    <div className="Addproducts px-0" style={{backgroundColor: `#E5E5E5` } }>
      <Secondnavproduct
        Name={{ name: "Add New Product", directory: "Products > Add Product" }}
        Btn={[
          { name: "Cancel", style: "", icon: "las la-times-circle" },
          { name: "Save", style: "bluebtn", icon: "las la-check-circle" },
        ]}
      />
      <div
        className=" p-3 container-fluid row gap-3 mx-0 gap-0"
        style={{ width: `100%` }}
      >
        <Leftaddproduct />
        <Rightaddproduct />
      </div>
    </div>
  );
}
