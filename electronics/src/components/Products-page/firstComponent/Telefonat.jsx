import React from "react";
import { useState } from "react";
import ButtonChild from "./ButtonChild";

function Telefonat({ iphone, samsungGalaxy, xiaomi, google, onePlus, lG, sony, blackBerry, }) {
   const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="products-col-btn">
        <ButtonChild header={"Telefonat"} onClick={() => setVisible(!visible)} id={2} />

        <div style={{display: !visible ? "block" : "none"}} id="telefonat" className="toggle-section">
          <div>
            <div className="itemconfiguration">
              <label>
                {" "}
                <input type="checkbox" />
                <p>{iphone}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{samsungGalaxy}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{xiaomi}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{google}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{onePlus}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{lG}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{sony}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{blackBerry}</p>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telefonat;