
import './ProductCard.css';

// Komponenti i kartave
const ProductCard = ({ product }) => {
  return (
    <>
      <div className={`products-card ${product.id === 2 || product.id === 4 || product.id === 6 || product.id === 8 ? "active" : "" }`}>
        <div className={`products-card-majtas ${product.id === 2 || product.id === 4 || product.id === 6 || product.id === 8 ? "active" : "" }`}>
          <div className={`kartaMadhe-info ${product.id === 2 || product.id === 4 || product.id === 6 || product.id === 8 ? "active" : "" } `}>
            <p>{product.paragrafi1}</p>
          </div>

          <h3 className={`${product.id === 2 || product.id === 4 || product.id === 6 || product.id === 8 ? "active" : "" }`} >{product.header1}</h3>

          <div className={`products-card-product ${product.id === 2 || product.id === 4 || product.id === 6 || product.id === 8 ? "active" : "" } `}>
            <img src={product.img} alt={product.paragrafi1} />

            <div className="informacioni-produktit">
              <p>{product.llojiPaisjes}</p>
              <h4>{product.paisja}</h4>

              <p>{product.sistemiOperativ}</p>
              <h4>-</h4>

              <p>{product.sensori}</p>
              <h4>{product.sensoriInfo}</h4>

              <p>{product.bateri}</p>
              <h4>{product.bateriinfo}</h4>
            </div>
          </div>

          <div className={`products-card-reviewsIMG ${product.id === 2 || product.id === 4 || product.id === 6 || product.id === 8 ? "active" : "" } `}>
            <span>{product.stars}</span>
            <p>{product.paragraphStars}</p>
          </div>
        </div>

        <div className="products-card-djathtas">
          <h4>{product.cmimiRekomandim}</h4>
          <h3>{product.cmimi}</h3>

          <a href="#">{product.link}</a>

          <p>{product.kontributi}</p>

          <div className="opsionet-dorezimi">
            <h4>
              {product.opsionetDorezimi}{" "}
              <span>{product.opsionetDorezimi2}</span>
            </h4>
            <p>{product.opsionetDorezimi3}</p>
          </div>

          <div className="opsionet-koleksioni-falas">
            <h4>{product.koleksioni}</h4>
            <p>
              {product.kontrollKolkesioni}
              <span>
                {product.span} {">"}
              </span>
            </p>
          </div>

          <div className="opsionet-shto-shporte">
            <button id={product.id}>
              {" "}
              {product.id} {product.shporta}
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;