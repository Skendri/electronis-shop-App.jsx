

import logo from '../../assets/images/amazon-logo-white.png'
import { useState } from 'react'

const NavPopUp = ({isopen}) => {
  const [isHover, setIsHover] = useState({className: "kategori-GlobeShops-rekomandon"});
  console.log(isHover);

  


  return (
    <div>
      <ul className={` kategori-GlobeShops-rekomandon ${ isHover ? "kategori-GlobeShops-rekomandon" : " "} `} id="kategori-GlobeShops-rekomandonPopUp">
        
        <p>GlobeShops Rekomandon</p>
        
        <li>geri</li>
        <li>Telefonia</li>
        <li>Kompjuter dhe tableta</li>
        <li>Pajisjet periferike dhe aksesoret</li>
        <li>TV dhe kinema në shtëpi</li>
        <li>Pajisje të mëdha</li>
        <li>Pajisje të vogla dhe kafe</li>
        <li>Kujdesi Personal</li>
        <li>Audio, kufje dhe navigatorë</li> 
      </ul>
    
      <div id="mbeshtjellsi-gjithaKategorite" className={`mbeshtjellsi-gjithaKategorite ${isopen ? 'hapPopUpMbeshtjellsi ' : ' '}`}>
        <div className="listat-gjithaKategorite">
          <div className="gjithaKategorite-logoBtn">
            <img src={logo} alt="logo"/>
            <button onClick='{hapPopUp()}'><i className="ph ph-x"></i></button>
          </div>
        
          <hr className="hr"/>
        
          <h4>Te gjitha Kategorite</h4>
        
         <ul onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="emri-lista">
          {/* {!isHover ? null : <h1>varri karin</h1>} */}
            <li className="kategoriPopUp"><a href="./html pages/product.html" >Product page</a><a href=""><svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li> 
            
            <li className="kategoriPopUp"><a href="./html pages/products.html">ALL Products page</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
        
            <li className="kategoriPopUp"><a href="./html pages/servisi.html">Servisi jone</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
            
            <li className="kategoriPopUp"><a href="./html pages/suportiKlientit.html">Suproti Klinetit</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
        
            <li className="kategoriPopUp"><a href="./html pages/faqjaKontakteve.html">Faqja e Kontakteve</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
        
            <li className="kategoriPopUp"><a href="./html pages/dyqanetTona.html">Dyqanet Tona</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
        
            <li className="kategoriPopUp"><a href="./html pages/livechat.html">Live Chati per pyetje</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
        
            <li className="kategoriPopUp"><a href="/html pages/perKompanine.html">Per Kompanine</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default NavPopUp