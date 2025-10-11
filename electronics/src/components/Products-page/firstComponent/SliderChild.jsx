
import React, { useState } from "react";
import ButtonChild from "./ButtonChild";
function SliderComponent({ name, toggle, isOpen }) {
  const [visible, setVisible] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(200);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value) || 200;
    setMaxValue(value);
  };

  return (
    <div>
      <div id="kontenieri-filter">
        <div className="products-row-btn">

          <ButtonChild header={"Cmimi"} onClick={() => setVisible(!visible)} />

        </div>

        <div
          style={{ display: !visible ? "block" : "none" }}
          id="price-toggle-btn-1"
          className="toggle-section"
        >
          <div id="content-1">
            <div className="range">
              <input
                className="range-min-input"
                type="number"
                placeholder="Nga 0 $"
                value={minValue}
                onChange={handleMinChange}
              />
            </div>

            <div className="range">
              <input
                type="number"
                className="range-max-input"
                placeholder="Te 200 $"
                value={maxValue}
                onChange={handleMaxChange}
              />
            </div>
          </div>

          <div className="kontenieri-filter2">
            <div className="rreshkitesi">
              <div className="progresi"></div>
            </div>

            <div className="inputi-range">
              <input
                type="range"
                className="range-min-input"
                min="0"
                max="200"
                value={minValue}
                onChange={handleMinChange}
              />
              <input
                type="range"
                className="range-max-input"
                min="0"
                max="200"
                value={maxValue}
                onChange={handleMaxChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

  export default SliderComponent;