import { useState, useRef, useEffect } from "react";
import KartatSlide from "./KartatChild";
import "./Slider.css";
import ButtonNextPrev from "./ButtonNextPrev";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardsPerView = 3; // Number of cards visible at once
  const totalCards = 10;

  function handleNext(e) {
    setCurrentIndex(currentIndex + 1);
    console.log("handle next clicked by user", currentIndex + 1, e.target);
  }

  function handlePrev() {
    setCurrentIndex(currentIndex - 1);
  }

  // Scroll to the appropriate position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / totalCards;
      const scrollPosition = currentIndex * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      console.log("ky eshte widthi i" + " " + cardWidth);
    }
  }, [currentIndex]);

  return (
    <div style={{ padding: "0 7%" }}>
      <section
        id="mbeshtjellesi-kartave-slider"
        className="mbeshtjellesi-kartave-slider"
      >
        <div
          id="kartat-e-medha-current"
          className="kartat-e-medha-current"
          ref={sliderRef}
        >
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 9 gusht"}
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 10'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />

          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 8 qershore"}
            header1={"PSE TE ZGJIDHNI XIAOMI AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 20'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 7 korrik"}
            header1={"PSE TE ZGJIDHNI IPHONE AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 30'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 6 maj"}
            header1={"PSE TE ZGJIDHNI BLACKBERRY AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 40'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 5 prill"}
            header1={"PSE TE ZGJIDHNI HAWAI AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 50'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 4 shtator"}
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 60'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 3 tetor"}
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 70'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 2 dhjetor"}
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 80'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 1 janar"}
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 90'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
          <KartatSlide
            paragraf1={"Ne dyqan dhe online"}
            paragraf2={"Deri me 31 shkurt"}
            header1={"PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?"}
            header2={"PERFITO 100'000 LEKE ULJE!!"}
            paragraf3={
              "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus"
            }
            paragraf4={"Zgjidhni nga 12 deri ne 48 keste "}
            img={
              "https://cms-images.mmst.eu/hzxov1nxpus5/278L0ptpEu27yrj4qm4yc6/b236a4aba8cfb8c25410d4a7ff9f26b1/visual-principale-lp-foldable-desk-centrato.jpg?q=70&fm=webp"
            }
          />
        </div>
        <ButtonNextPrev
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          totalCards={totalCards}
          cardsPerView={cardsPerView}
        />

      </section>
    </div>
  );
};

export default Slider;
