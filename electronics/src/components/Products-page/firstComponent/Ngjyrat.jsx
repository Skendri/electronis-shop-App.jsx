
import React, { useState } from "react";
import ButtonChild from "./ButtonChild";

function Ngjyrat({ header, argjendi, gri, ezeze, roze, blu, jeshile, kafe, gold, }) {
   const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="products-col-btn">

        <ButtonChild onClick={() => setVisible(!visible)} header={"Ngjyrat"} id={1} />

        <div style={{display: !visible ? "block" : "none"}}  id="color-content" className="toggle-section">
          <div>
            <div className="itemconfiguration">
              <label>
                {" "}
                <input type="checkbox" />
                <p>{argjendi}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{gri}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{ezeze}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{roze}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{blu}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{jeshile}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{kafe}</p>{" "}
              </label>

              <label>
                {" "}
                <input type="checkbox" />
                <p>{gold}</p>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ngjyrat;