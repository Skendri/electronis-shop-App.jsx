import React from "react";
import "./SlideriReklames.css";

const SlideriReklames = () => {
  return (
    <>
      <div className="kontenieri-reklames">
        <div className="slider-container">
          <div className="image-container">
            <img src="https://picsum.photos/id/237/500/300" alt="image" />
            <img src="https://picsum.photos/id/1/500/300" alt="image" />
            <img src="https://picsum.photos/id/10/500/300" alt="image" />
            <img src="https://picsum.photos/id/20/500/300" alt="image" />
            <img src="https://picsum.photos/id/200/500/300" alt="image" />
          </div>
          <i className="fas fa-angle-double-left btn prev">
            <i className="fas fa-angle-double-right btn next"></i>
          </i>
        </div>
        <i className="fas fa-angle-double-left btn prev">
          <i className="fas fa-angle-double-right btn next"></i>
        </i>
      </div>
      <i className="fas fa-angle-double-left btn prev">
        <i className="fas fa-angle-double-right btn next"></i>
      </i>
    </>
  );
};

export default SlideriReklames;
