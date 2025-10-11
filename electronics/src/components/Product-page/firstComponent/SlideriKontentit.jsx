import React, { useState } from "react";
import SliderButton from "./SliderButton";



const SlideriKontentit = () => {
  const images = [
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805472?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805473?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805474?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const setImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div id="slideri-kontentit">
        <div className="slideri-produktit-lart">
          <SliderButton onClick={prevImg}>{'<'}</SliderButton>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} id="slider-image" />
          <SliderButton onClick={nextImg}>{'>'}</SliderButton>
        </div>

        <div className="slideri-produktit-posht">
          <SliderButton onClick={prevImg}>{'<'}</SliderButton>
          {images.map((imgSrc, index) => (
            <img
              key={index}
              className={`thumbnail${index === currentIndex ? " active" : ""}`}
              src={imgSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setImage(index)}
              style={{ cursor: "pointer",  borderColor: index === currentIndex ? "red" : " " }}
            />
          ))}
          <SliderButton onClick={nextImg}>{'>'}</SliderButton>
        </div>

      </div>
    </>
  );
};

export default SlideriKontentit;
