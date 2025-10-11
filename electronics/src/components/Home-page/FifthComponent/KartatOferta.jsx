import React, { useState, useRef, useEffect } from 'react'
import './KartatOferta.css';

const cardInfo = [
  {
      id: 0,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
      id: 1,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 2,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 3,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 4,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 5,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 6,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 7,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 8,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 9,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
     {
      id: 10,
      img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
      paragrafi1: "Ne dyqan dhe online",
      paragrafi2: "Deri me 9 gusht",
      header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
      header2: "PERFITO 10'000 LEKE ULJE!!",
      paragrafi3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
      paragrafi4: "Zgjidhni nga 12 deri ne 48 keste"
    },
  ]

const KartatOferta = () => {

  const [next, setNext] = useState(0);

  const currentRef = useRef(null);

  const cardShowed = 3; // Number of cards visible at once
  const totalCards = cardInfo.length;

  function handleNext() {
    if (next < totalCards - cardShowed) {
    setNext((prev) => prev + 1);
    };
    console.log("Next clicked by user");
  };

  function handlePrev() {
    if (next > 0) {
    setNext((prev) => prev - 1);
    };
    console.log("prev clicked by user");
  };

  const scrollToIndex = (index) => {
    const cardWidth = currentRef.current.offsetWidth / cardShowed;
    currentRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    scrollToIndex(next);
  }, [next]);

  return (
    <div style={{padding: '0 7%' }}>

      <div id="background-kartave-klub" className="backgroundi-karta-klub">
        <div id="kartat-e-medha-klub" className="kartat-e-medha-ofertat" ref={currentRef}>

          {cardInfo.map((card, index) => (
            <Karta key={index}
            img={card.img}
            paragrafi1={card.paragrafi1}
            paragrafi2={card.paragrafi2}
            header1={card.header1}
            header2={card.header2}
            paragrafi3={card.paragrafi3}
            paragrafi4={card.paragrafi4}
            />
           ) )
          }
          
        </div>
      </div>
            {/* <!-- BUTONAT E SLIDERIT --> */}
      <section id="butonat-e-kontrolluesit-klub" className="butonat-e-kontrolluesit">
        <button onClick={handlePrev} id="majtas-klub"> <i className="fa-solid fa-chevron-left"></i> </button>
        <button onClick={handleNext} id="djathtas-klub"> <i className="fa-solid fa-chevron-right"></i> </button>
      </section>
      
    </div>
    
  )
}

// komponenti i funksionit

function Karta({ img, paragrafi1, paragrafi2, header1, header2, paragrafi3, paragrafi4 }) {
  return (
    <div>
      <div className="kartaMadhe">
        <div className="kartaMadhe-foto">
          <img src={img} alt="" draggable="false"/>
        </div>
        
        <div className="kartaMadhe-kutiaInfos">
          <div className="kartaMadhe-info">
            <p>{paragrafi1}</p>
            <p>{paragrafi2}</p>
          </div>
          
          <div className="kartaMadhe-infoDyte">
            <h4>{header1}</h4>
            <h3>{header2}</h3>
            <p>{paragrafi3}</p>
            
            <div className="kartaMadhe-info">
              <p>{paragrafi4}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default KartatOferta
