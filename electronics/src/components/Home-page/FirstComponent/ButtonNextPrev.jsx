import React from "react";
import './buttonNextPrev.css'

const buttonNextPrev = ({handleNext, handlePrev, currentIndex, totalCards, cardsPerView}) => {
  return (
    <>
      {/* butonat e kontrrollit te sliderit */}
      <section
        id="butonat-e-kontrolluesit-slideri"
        className="butonat-e-kontrolluesit-slideri"
      >
        <button onClick={handlePrev} id="majtas" disabled={currentIndex === 0}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button
          onClick={handleNext}
          id="djathtas"
          disabled={currentIndex == totalCards - cardsPerView}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>
    </>
  );
};

export default buttonNextPrev;
