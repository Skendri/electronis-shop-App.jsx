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

const SliderProduct = () => {
  return (
    <>
      <section className="seksioni-plani-pare" id="seksioni-plani-pare">
        <div className="plani-pare">
          <p>Ne plan te pare</p>
          <section id="butonat-e-planit" className="butonat-e-kontrolluesit">
            <button id="majtas-plani-pare">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button id="djathtas-plani-pare">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </section>
        </div>

        <div className="kartat-plani-pare" id="kartat-plan-pare">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SliderProduct;
