import React from 'react'
import Navbar from './Home-page/Navbar/Navbar'
import Footer from './Home-page/Footer/Footer'
import AsideElement from './Products-page/firstComponent/AsideElement'

const Products = () => {
  return (
    <div>
        <Navbar />
        
          {/* <!--                   PRODUCTS page                             --> */}
  <div className="products-container" id="products-container">
    <AsideElement/>
     {/* <!--                divi madh fare i kontenierit anesore              --> */}
    
    <div className="products-djathtas-container">
      <div className="products-rrezultate">
        <div>
          <h3>Rezultatet e kerkimit per oren inteligjente xiaomi</h3>
          <p>Kerkoni ne vend te kesaj<a href="#"> ore inteligjente xiaomi</a></p>
        </div>
        
        <div className= "button-tabele">
          <button id="toggleButton"> Rezultate me te mira 
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
          </button>
          <div className="tabela">
            <p>Best Product</p>
            <p>Best Product</p>
            <p>Best Product</p>
            <p>Best Product</p>
            <p>Best Product</p>
          </div> 
        </div>
      </div>
      
      <img className="kategori-banner-card" src="./images/kategori-banner-card.gif"/>
      {/* <!--                cartat e produkteve djathtas          --> */}
      <div className="products-card">
        <div className="products-card-majtas">
          <div className="kartaMadhe-info kartaGjere-info">
            <p>Ne dyqan dhe online</p>
          </div>
          <h3>Ore inteligjente XIAOMI Redmi Ora 3 aktive, e zeze</h3>
          <div className="products-card-product">
            <img src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107996820?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320" />
            <div className="informacioni-produktit">
              <p>Lloji i pajisjes:</p>
              <h4>SMARTWATCH</h4>
              <p>Sisteme operative te pajtueshme:</p>
              <h4>-</h4>
              <p>Sensori i rrahjeve te zemres:</p>
              <h4>po</h4>
              <p>Jetegjatesia e baterise:</p>
              <h4>288 ore</h4>
            </div>
          </div>
          
          <div className="products-card-reviewsIMG">
            &#11088; &#11088; &#11088; &#11088; &#11088;
            <p>32</p>
          </div>
        </div>
        
        <div className="products-card-djathtas">
          <h4>E rekomanduar 39.99 €</h4>
          <h3> 34,99 €</h3>
          <a href="#">Informacion mbi: Financimi, Cmimi, Sasia, Koha e dorezimit dhe Marrja</a>
          <p>Eko-kontributi i TVSH dhe WEEE i perfshire</p>
          
          <div className="opsionet-dorezimi">
            <h4>Ofrohet dorezimi <span>+2,99 €</span></h4>
            <p>Dorezimi i parashikuar 21.08.2024 - 23.08.2024(Ne shporte, shkruani kodin postar dhe do te keni nje date me te sakte) </p>
          </div>
          
          <div className="opsionet-koleksioni-falas">
            <h4>Koleksioni FALAS ne dyqan</h4>
            <p>Kontrolloni koleksionin ne dyqan <span>Zgjidh Dyqanin {'>'} </span></p>
          </div>
          
          <div className="opsionet-shto-shporte">
            <button>Shto ne Shporte</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"> </path> </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="products-card">
        <div className="products-card-majtas">
          <div className="kartaMadhe-info kartaGjere-info">
            <p>Ne dyqan dhe online</p>
          </div>
          <h3>Ore inteligjente XIAOMI Redmi Ora 3 aktive, e zeze</h3>
          <div className="products-card-product">
            <img src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107996820?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320" />
            <div className="informacioni-produktit">
              <p>Lloji i pajisjes:</p>
              <h4>SMARTWATCH</h4>
              <p>Sisteme operative te pajtueshme:</p>
              <h4>-</h4>
              <p>Sensori i rrahjeve te zemres:</p>
              <h4>po</h4>
              <p>Jetegjatesia e baterise:</p>
              <h4>288 ore</h4>
            </div>
          </div>
          
          <div className="products-card-reviewsIMG">
            &#11088; &#11088; &#11088; &#11088; &#11088;
            <p>32</p>
          </div>
        </div>
        
        <div className="products-card-djathtas">
          <h4>E rekomanduar 39.99 €</h4>
          <h3> 34,99 €</h3>
          <a href="#">Informacion mbi: Financimi, Cmimi, Sasia, Koha e dorezimit dhe Marrja</a>
          <p>Eko-kontributi i TVSH dhe WEEE i perfshire</p>
          
          <div className="opsionet-dorezimi">
            <h4>Ofrohet dorezimi <span>+2,99 €</span></h4>
            <p>Dorezimi i parashikuar 21.08.2024 - 23.08.2024
              (Ne shporte, shkruani kodin postar
              dhe do te keni nje date me te sakte)
            </p>
          </div>
          
          <div className="opsionet-koleksioni-falas">
            <h4>Koleksioni FALAS ne dyqan</h4>
            <p>Kontrolloni koleksionin ne dyqan <span>Zgjidh Dyqanin{'>'} </span></p>
          </div>
          <div className="opsionet-shto-shporte">
            <button>Shto ne Shporte</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path
              d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path> </svg> 
            </button>
          </div>
        </div>
      </div>
      
      <div className="products-card">
        <div className="products-card-majtas">
          <div className="kartaMadhe-info kartaGjere-info">
            <p>Ne dyqan dhe online</p>
          </div>
          <h3>Ore inteligjente XIAOMI Redmi Ora 3 aktive, e zeze</h3>
          <div className="products-card-product">
            <img src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107996820?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320" />
            <div className="informacioni-produktit">
              <p>Lloji i pajisjes:</p>
              <h4>SMARTWATCH</h4>
              <p>Sisteme operative te pajtueshme:</p>
              <h4>-</h4>
              <p>Sensori i rrahjeve te zemres:</p>
              <h4>po</h4>
              <p>Jetegjatesia e baterise:</p>
              <h4>288 ore</h4>
            </div>
          </div>
          
          <div className="products-card-reviewsIMG">
            &#11088; &#11088; &#11088; &#11088; &#11088;
            <p>32</p>
          </div>
        </div>
        
        <div className="products-card-djathtas">
          <h4>E rekomanduar 39.99 €</h4>
          <h3> 34,99 €</h3>
          <a href="#">Informacion mbi: Financimi, Cmimi, Sasia, Koha e dorezimit dhe Marrja</a>
          <p>Eko-kontributi i TVSH dhe WEEE i perfshire</p>
          <div className="opsionet-dorezimi">
            <h4>Ofrohet dorezimi <span>+2,99 €</span></h4>
            <p>Dorezimi i parashikuar 21.08.2024 - 23.08.2024
              (Ne shporte, shkruani kodin postar
              dhe do te keni nje date me te sakte)
            </p>
          </div>
          <div className="opsionet-koleksioni-falas">
            <h4>Koleksioni FALAS ne dyqan</h4>
            <p>Kontrolloni koleksionin ne dyqan <span>Zgjidh Dyqanin {'>'} </span></p>
          </div>
          
          <div className="opsionet-shto-shporte">
            <button>Shto ne Shporte</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70 103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"> </path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="products-card">
        <div className="products-card-majtas">
          <div className="kartaMadhe-info kartaGjere-info">
            <p>Ne dyqan dhe online</p>
          </div>
          <h3>Ore inteligjente XIAOMI Redmi Ora 3 aktive, e zeze</h3>
          <div className="products-card-product">
            <img src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107996820?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320" />
            <div className="informacioni-produktit">
              <p>Lloji i pajisjes:</p>
              <h4>SMARTWATCH</h4>
              <p>Sisteme operative te pajtueshme:</p>
              <h4>-</h4>
              <p>Sensori i rrahjeve te zemres:</p>
              <h4>po</h4>
              <p>Jetegjatesia e baterise:</p>
              <h4>288 ore</h4>
            </div>
          </div>
          
          <div className="products-card-reviewsIMG">
            &#11088; &#11088; &#11088; &#11088; &#11088;
            <p>32</p>
          </div>
        </div>
        
        <div className="products-card-djathtas">
          <h4>E rekomanduar 39.99 €</h4>
          <h3> 34,99 €</h3>
          <a href="#">Informacion mbi: Financimi, Cmimi, Sasia, Koha e dorezimit dhe Marrja</a>
          <p>Eko-kontributi i TVSH dhe WEEE i perfshire</p>
          <div className="opsionet-dorezimi">
            <h4>Ofrohet dorezimi <span>+2,99 €</span></h4>
            <p>Dorezimi i parashikuar 21.08.2024 - 23.08.2024
              (Ne shporte, shkruani kodin postar
              dhe do te keni nje date me te sakte)
            </p>
          </div>
          
          <div className="opsionet-koleksioni-falas">
            <h4>Koleksioni FALAS ne dyqan</h4>
            <p>Kontrolloni koleksionin ne dyqan <span>Zgjidh Dyqanin {'>'} </span></p>
          </div>
          
          <div className="opsionet-shto-shporte">
            <button>Shto ne Shporte</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path> </svg>
            </button>
          </div>
        </div>
      </div>
      <img className="kategori-banner-card" src="https://cms-images.mmst.eu/hzxov1nxpus5/iONRY5GwPN6LbTspzKJzS/16b63feb18b5eac64f1dc1e3bcabfbc2/Banner_MW_ESPORTA_Home_Teaser_Carousel_Orizz_Desk_1200x900.jpg?q=92&w=890"/>
    </div>
  </div>

        <Footer/>
    </div>
  )
}

export default Products