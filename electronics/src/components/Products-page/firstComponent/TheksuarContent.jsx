
import React, {useState} from "react";
import ButtonChild from "./ButtonChild";

function TheksuarContent({paragarf1, paragarf2, isOpenTheksuar}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="products-col-btn">

        <ButtonChild onClick={() => setVisible(!visible)} header={"E Theksuar"} id={0} />

        {!isOpenTheksuar && (
          <div style={{display: !visible ? "block" : "none"}} id="theksuar-content" className="toggle-section">
            <div>
              <label>
                {" "}
                <input type="checkbox"  />
                <p>{paragarf1}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" />
                <p>{paragarf2}</p>{" "}
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TheksuarContent;