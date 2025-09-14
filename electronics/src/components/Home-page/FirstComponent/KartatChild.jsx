import React from "react";
import "./Slider.css";

// komponenti i kartave te slider
export default function KartatSlide({ paragraf1, paragraf2, header1, header2, paragraf3, paragraf4, img }) {

  return (
    <>
      <div className="kartaMadhe" id="kartaMadhe">
        <div className="kartaMadhe-foto">
          <img
            src={img}
            alt=""
            draggable="false"
          />
        </div>

        <div className="kartaMadhe-kutiaInfos">
          <div className="kartaMadhe-info">
            <p>{paragraf1}</p>
            <p>{paragraf2}</p>
          </div>

          <div className="kartaMadhe-infoDyte">
            <h4>{header1}</h4>
            <h3>{header2}</h3>
            <p>{paragraf3}</p>

            <div className="kartaMadhe-info">
              <p>{paragraf4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}