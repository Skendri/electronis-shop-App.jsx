import React from "react";
import "./KartatChild.css";

// komponenti i kartave te slider
export default function KartatSlide({ paragraf1, paragraf2, header1, header2, paragraf3, paragraf4, img }) {

  return (
    <>
      <div className="kartaMadhe-current" id="kartaMadhe-current">
        <div className="kartaMadhe-foto-current">
          <img
            src={img}
            alt=""
            draggable="false"
          />
        </div>

        <div className="kartaMadhe-kutiaInfos-current">
          <div className="kartaMadhe-info-current">
            <p>{paragraf1}</p>
            <p>{paragraf2}</p>
          </div>

          <div className="kartaMadhe-infoDyte-current">
            <h4>{header1}</h4>
            <h3>{header2}</h3>
            <p>{paragraf3}</p>

            <div className="kartaMadhe-info-current">
              <p>{paragraf4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}