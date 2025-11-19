


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
          <img src={product.ratingImage} alt="stars" />
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

export default ProductCard;