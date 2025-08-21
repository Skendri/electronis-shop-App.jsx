import React from 'react'
import './Slider.css'
import { useState, useRef, useEffect } from 'react'

const Slider = () => { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardsPerView = 3; // Number of cards visible at once
  const totalCards = 10;

  function handleNext(e) {
    if (currentIndex < totalCards - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex);
    }
    console.log("handle next clicked by user", currentIndex + 1, e.target);
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    console.log("handle prev clicked by user");
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
    <div>
      <section id="mbeshtjellesi-kartave" className="mbeshtjellesi-kartave">
        <div id="kartat-e-medha" className="kartat-e-medha" ref={sliderRef}>
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 9 gusht"} 
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 10'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 8 qershore"} 
            header1={"PSE TE ZGJIDHNI XIAOMI AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 20'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 7 korrik"} 
            header1={"PSE TE ZGJIDHNI IPHONE AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 30'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 6 maj"} 
            header1={"PSE TE ZGJIDHNI BLACKBERRY AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 40'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 5 prill"} 
            header1={"PSE TE ZGJIDHNI HAWAI AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 50'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 4 shtator"} 
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 60'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 3 tetor"} 
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 70'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 2 dhjetor"} 
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 80'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 1 janar"} 
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 90'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
          <KartatSlide 
            paragraf1={"Ne dyqan dhe online"} 
            paragraf2={"Deri me 31 shkurt"} 
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"} 
            header2={"PERFITO 100'000 LEKE ULJE!!"} 
            paragraf3={"Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"} 
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "} 
          />
        </div>
      </section>

      {/* butonat e kontrrollit te sliderit */}
      <section id="butonat-e-kontrolluesit" className="butonat-e-kontrolluesit">
        <button onClick={handlePrev} id="majtas" disabled={currentIndex === 0}> 
          <i className="fa-solid fa-chevron-left"></i> 
        </button>
        <button onClick={handleNext} id="djathtas" disabled={currentIndex >= totalCards - cardsPerView}> 
          <i className="fa-solid fa-chevron-right"></i> 
        </button>
      </section>
    </div>
  )
}

  // komponenti i kartave te slider
 function KartatSlide({paragraf1, paragraf2, header1, header2, paragraf3, paragraf4}) {
  
  return (
    <>
    <div className="kartaMadhe" id="kartaMadhe">

      <div className="kartaMadhe-foto">
        <img src="https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp" alt="" draggable="false"/>
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
  )
}

export default Slider;
