import React, { useRef, useEffect } from 'react';
import './KartaMadheSlider.css';
import { useState } from 'react';

const KartaMadheSlider = () => {
  const sliderRef = useRef(null);
  const cardsPerView = 1;
  const totalCards = 3;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Card data array
  const cardData = [
    {
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste",
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    },
    {
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 20 prill",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 22'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste",
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    },
    {
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 31 maj",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 30'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste",
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    }
  ];

  function handleNext() {
    if (currentIndex < totalCards - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
    console.log("Next clicked by user");
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    console.log("Previous clicked by user");
  }

  // Scroll to the appropriate position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / totalCards;
      const scrollPosition = currentIndex * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div style={{padding: '1% 10%' }}>
      <div id="mbeshtjellesi-gjere-kartave-klub" className="mbeshtjellesi-kartave">
        <div id="kartat-e-gjera-klub" className="kartat-e-medha" ref={sliderRef}>
          {cardData.map((card, index) => (
            <Kartat
              key={index}
              paragrafi1={card.paragrafi1}
              paragrafi2={card.paragrafi2}
              header1={card.header1}
              header2={card.header2}
              paragrafi3={card.paragrafi3}
              paragrafi4={card.paragrafi4}
              img={card.img}
            />
          ))}
        </div>
      </div>

      <div id="butonat-e-kontrolluesit-teGjere-klub" className="butonat-e-kontrolluesit">
        <button onClick={handlePrev} id="majtas-kontrolluesi-gjere-klub" disabled={currentIndex === 0}>
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button onClick={handleNext} id="djathtas-kontrolluesi-gjere-klub" disabled={currentIndex >= totalCards - cardsPerView}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

    </div>
  );
};

function Kartat({paragrafi1, paragrafi2, header1, header2, paragrafi3, paragrafi4, img}) {
  return (
    <div id="kartaMadheID" className="kartaMadhe">
      <div className="kartaMadhe-kutiaInfos kartaGjere-kutia">
        <div className="kartaMadhe-info kartaGjere-info">
          <p>{paragrafi1}</p>
          <p>{paragrafi2}</p>
        </div>

        <div className="kartaMadhe-infoDyte kartaGjere-infoDyte">
          <h4>{header1}</h4>
          <h3>{header2}</h3>
          <p>{paragrafi3}</p>

          <div className="kartaMadhe-info" id="kartaGjere-infoPosht">
            <p>{paragrafi4}</p>
          </div>
        </div>
      </div>

      <div className="kartaMadhe-foto kartaGjere-foto">
        <img
          src={img}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  )
}

export default KartaMadheSlider;
