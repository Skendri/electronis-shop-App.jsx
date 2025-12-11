
import React, { useState } from "react";

function ButtonChild({ onClick , id, header }) {
  const [rotate, setRotate] = useState(false)
 
  return (
  <button
    onClick={onClick}
    className="products-butonat"
    data-target="theksuar-content"
    id={id}
    >
      <p>{header}</p>
      <svg width="32" height="32" viewBox="0 0 24 24" onClick={() => (setRotate(!rotate))} style={{ transform: !rotate ? "rotate(0deg)" : "rotate(-90deg)"}} >
        <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
      </svg>
  </button>
  )
};

export default ButtonChild;