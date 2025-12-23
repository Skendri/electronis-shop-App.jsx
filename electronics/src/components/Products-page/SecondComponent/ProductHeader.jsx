
import React, { useState } from "react";
import "./ProductHeader.css";

function ProductHeader({ header, paragrafi, button, text1, text2, text3, text4, text5, }) {
  
  const [isTableVisible, setIsTableVisible] = useState(false);

  return (
    <>
      <div className="products-rrezultate">
        <div>
          <h3>{header}</h3>
          <p>
            <a href="#"> {paragrafi} </a>
          </p>
        </div>

        <div className="button-tabele">
          <button
            id="toggleButton"
            onClick={() => setIsTableVisible(!isTableVisible)}
          >
            {" "}
            {button}
            <svg width="32" height="32" viewBox="0 0 24 24"  style={{ transform: isTableVisible ? "rotate(-270deg)" : "rotate(0deg)", transition: "0.3s ease", }} >
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
          </button>

          <div className="tabela" style={{ display: isTableVisible ? "block" : "none" }}>
            <p>{text4}</p>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text5}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHeader;