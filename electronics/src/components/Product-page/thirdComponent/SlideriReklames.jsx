import React, { useState } from "react";
import "./SlideriReklames.css";

const SlideriReklames = () => {

  const images = [
    "https://picsum.photos/id/237/500/300",
    "https://picsum.photos/id/1/500/300",
    "https://picsum.photos/id/10/500/300",
    "https://picsum.photos/id/20/500/300",
    "https://picsum.photos/id/200/500/300"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex(prev => (prev === images.length -1 ? 0 : prev + 1) );
    console.log("butoni u klikua");
  };

  function handlePrev() {
    setCurrentIndex(currentIndex => currentIndex === 0 ? images.length : currentIndex -1);
    console.log(" edhe ky butoni u klikua");
  }

  return (
    <>
      <div className="kontenieri-reklames">
        <div className="slider-container">
          <div className="image-container">
            <img src={images[currentIndex]} alt="image" />
          </div>
          <i className="fas fa-angle-double-left btn prev" onClick={handlePrev} ></i>
          <i className="fas fa-angle-double-right btn next" onClick={handleNext} ></i>
        </div>
      </div>
     
    </>
  );
};

export default SlideriReklames;
