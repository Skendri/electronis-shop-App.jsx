import React, { useState } from "react";
import ButtonChild from "./ButtonChild";

function Ngjyrat({ argjendi, gri, ezeze, roze, blu, jeshile, kafe, gold }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(true);

  function handleOnChange() {
    setActive(!active)
  }

  return (
    <>
      <div className="products-col-btn">
        <ButtonChild
          onClick={() => setVisible(!visible)}
          header={"Ngjyrat"}
          id={1}
        />

        <div
          style={{ display: !visible ? "block" : "none" }}
          id="color-content"
          className="toggle-section"
        >
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
                <input type="checkbox" checked onChange={handleOnChange} />
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
}

export default Ngjyrat;
