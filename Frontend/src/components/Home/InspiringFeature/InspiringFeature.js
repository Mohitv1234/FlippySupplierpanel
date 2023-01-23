import React from "react";
import "../Home.css";
import infeateure from "./infeature";
const InspiringFeature = () => {
  return (
    <>
      <div className="container-fluid m-2 ">
        <div class="row">
          {infeateure.map((element, index) => {
            return (
              <>
                <div class="col">
                  <div class="card" style={{ width: "20rem" }}>
                    <div className="heart_icon">
                      <i class="lar la-heart"></i>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{element.title}</h5>
                      <p class="card-text">{element.descryption}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InspiringFeature;
