import React from "react";
import "./CardsComponent.css";
import CardData from "./CardData";
console.log(CardData);

const CardsComponent = () => {
  return (
    <>
      <div className="products-djathtas-container">

        <ProductHeader header={"Rezultatet e kerkimit per oren inteligjente xiaomi"} 
        paragrafi={"Kerkoni ne vend te kesaj ore inteligjente xiaomi"} 
        button={"Rezultate me te mira"} 
        text1={"Best Product"} 
        text2={"Best Product"} 
        text3={"Best Product"}  
        text4={"Best Product"}  
        text5={"Best Product"}  
        />

        <img
          className="kategori-banner-card"
          src="./images/kategori-banner-card.gif"
        />
        {/* <!--                cartat e produkteve djathtas          --> */}
        <ProductCard CardData={CardData} />

        <img
          className="kategori-banner-card"
          src="https://cms-images.mmst.eu/hzxov1nxpus5/iONRY5GwPN6LbTspzKJzS/16b63feb18b5eac64f1dc1e3bcabfbc2/Banner_MW_ESPORTA_Home_Teaser_Carousel_Orizz_Desk_1200x900.jpg?q=92&w=890"
        />
      </div>
    </>
  );
};

function ProductHeader({header, paragrafi, button, text1, text2, text3, text4, text5}) {
    return (
        <>
        <div className="products-rrezultate">
            <div>
                <h3>{header}</h3>
                <p><a href="#"> {paragrafi} </a></p>
            </div>
            
            <div className="button-tabele">
                <button id="toggleButton">
                    {" "}
                    {button}
                    <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
                    </svg>
                </button>
                
                <div className="tabela">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <p>{text4}</p>
                    <p>{text5}</p>
                </div>
            </div>
        </div>
        </>
    )
}

const ProductCard = ({CardData}) => {
  return (
    <>
      <div className="products-card">
        <div className="products-card-majtas">
          <div className="kartaMadhe-info kartaGjere-info">
            <p>{CardData.paragrafi1}</p>
          </div>
          
          <h3>{CardData.header1}</h3>
          
          <div className="products-card-product">
            <img 
              src={CardData.img} 
              alt={CardData.paragrafi1}
            />
            
            <div className="informacioni-produktit">
              <p>{CardData.llojiPaisjes}</p>
              <h4>{CardData.paisja}</h4>
              
              <p>{CardData.sistemiOperativ}</p>
              <h4>-</h4>
              
              <p>{CardData.sensori}</p>
              <h4>{CardData.sensoriInfo}</h4>
              
              <p>{CardData.bateri}</p>
              <h4>{CardData.bateriinfo}</h4>
            </div>
          </div>
          
          <div className="products-card-reviewsIMG">
            <span>{CardData.stars}</span>
            <p>{CardData.paragraphStars}</p>
          </div>
        </div>
        
        <div className="products-card-djathtas">
          <h4>{CardData.cmimiRekomandim}</h4>
          <h3>{CardData.cmimi}</h3>
          
          <a href="#">
            {CardData.link}
          </a>
          
          <p>{CardData.kontributi}</p>
          
          <div className="opsionet-dorezimi">
            <h4>{CardData.opsionetDorezimi} <span>{CardData.opsionetDorezimi2}</span></h4>
            <p>
             {CardData.opsionetDorezimi3}
            </p>
          </div>
          
          <div className="opsionet-koleksioni-falas">
            <h4>{CardData.koleksioni}</h4>
            <p>
              {CardData.kontrollKolkesioni}
              <span>{CardData.span} {">"}</span>
            </p>
          </div>
          
          <div className="opsionet-shto-shporte">
            <button>{CardData.shporta}</button>
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
  )
}

export default CardsComponent;
