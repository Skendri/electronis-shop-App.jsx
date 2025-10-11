import React from "react";
import "./SplitText.css";

const SplitText = ({ text }) => {
  return (
    <div className="split-text" style={{marginBottom: '30px'}} >
      {text.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;