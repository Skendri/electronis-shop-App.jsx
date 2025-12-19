
import { useRef, useEffect, useState } from 'react';
import ProductCard from './ProductCardChild';
import productsData from '../../../Data/ProductData';
import './SliderProduct.css'; // Assuming you have a CSS file for styling


function SliderProduct() {
  const cardSliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardShow = 5;
  const totalCards = productsData.length;

  // Prepare cloned data
  const clonesBefore = productsData.slice(-cardShow);
  const clonesAfter = productsData.slice(0, cardShow);
  const displayCards = [...clonesBefore, ...productsData, ...clonesAfter];

  const scrollToIndex = (index) => {
    const cardWidth = cardSliderRef.current.offsetWidth / cardShow;
    cardSliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Update scroll when index changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  // Jump logic when reaching clones
  useEffect(() => {
    const cardWidth = cardSliderRef.current.offsetWidth / cardShow;
    const handleScrollEnd = () => {
      if (currentIndex >= totalCards + cardShow) {
        // Jump to start
        setCurrentIndex(cardShow);
        cardSliderRef.current.scrollTo({
          left: cardShow * cardWidth,
          behavior: "auto",
        });
      }
      if (currentIndex < cardShow) {
        // Jump to end
        setCurrentIndex(totalCards + cardShow - 1);
        cardSliderRef.current.scrollTo({
          left: (totalCards + cardShow - 1) * cardWidth,
          behavior: "auto",
        });
      }
    };
    handleScrollEnd();
  }, [currentIndex]);

  // Start in the middle (real first card)
  useEffect(() => {
    setCurrentIndex(cardShow);
  }, []);

  return (
    <section className="seksioni-plani-pare">
      <div className="plani-pare">
        <p>Ne plan te pare</p>
        <section className="butonat-e-kontrolluesit">
          <button onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </section>
      </div>

      <div className="kartat-plani-pare" ref={cardSliderRef}>
        {displayCards.map((product, i) => (
          <ProductCard key={`${product.id}-${i}`} product={product} />
        ))}
      </div>
      
    </section>
  );
}


export default SliderProduct;
