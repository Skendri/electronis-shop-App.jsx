
import React, { useState } from "react";
import ButtonChild from "./ButtonChild";

function ProductCustomization({ paragarf1, paragarf2, paragarf3, isOpenNismat }) {

  const [visible, setVisible] = useState(false);

    return (
      <>
        <div className="products-col-btn">

          <ButtonChild header={"Nismat ne Vazhdim"} onClick={() => setVisible(!visible)} id={4} />

          {!isOpenNismat && (
            <div
              style={{ display: !visible ? "block" : "none" }}
              id="nismat-content"
              className="toggle-section"
            >
              <div id="togle">
                <label>
                  {" "}
                  <input type="checkbox" checked /> <p>{paragarf1}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" /> <p>{paragarf2}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" /> <p>{paragarf3}</p>{" "}
                </label>
              </div>
            </div>
          )}
        </div>
      </>
    )};

    export default ProductCustomization;