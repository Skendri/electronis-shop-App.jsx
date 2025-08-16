import { useRef, useEffect, useState } from 'react';
import React from 'react';
import './SliderProduct.css'; // Assuming you have a CSS file for styling

// Product data stored in the same file as requested
const productsData = [
  {
    id: 1,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 2,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 3,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 4,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 5,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 6,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 7,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 8,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 9,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  },
  {
    id: 10,
    title: "Top shites",
    image: "https://images.samsung.com/is/image/samsung/p6pim/al/sm-f741bzsgeuc/gallery/al-galaxy-zflip6-f741-sm-f741bzsgeuc-542935364?$684_547_JPG$",
    ratingImage: "./images/rating-35.png",
    reviews: 200,
    name: "APPLE AirPods Gjenerata e 2-të me kuti karikimi (modeli 2019)",
    originalPrice: "979",
    currentPrice: "799",
    infoLink: "",
    ecoText: "Eko-kontributi i TVSH dhe WEEE i perfshire"
  }
];

// Reusable ProductCard component
const ProductCard = ({ product }) => {
  return (
    <div className="karta-plan-pare">
      <div className="plani-pare-siper">
        <h4>{product.title}</h4>
        <img
          src={product.image}
          alt={product.name}
        />
        <div className="reviews">
          <img src={product.ratingImage} alt="starts" />
          <p>{product.reviews}</p>
        </div>
        <p>{product.name}</p>
      </div>

      <div className="plani-pare-posht">
        <p>
          Rekomanduar €{product.originalPrice} <br />
          <span className="cmimi">{product.currentPrice},-€</span>
        </p>

        <a href={product.infoLink}>
          Informacion mbi: Financimi, Cmimi, Sasia, Koha e dorezimit dhe
          Marrja
        </a>
        <p>{product.ecoText}</p>
      </div>
    </div>
  );
};


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
