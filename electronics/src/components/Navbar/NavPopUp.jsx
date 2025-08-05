import logo from '../../assets/images/amazon-logo-white.png'
import { useState } from 'react'

const NavPopUp = ({isopen}) => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      <ul
        onMouseEnter={() => handleMouseEnter(8)}
        onMouseLeave={handleMouseLeave}
        className="kategori-GlobeShops-rekomandon" 
        id="kategori-GlobeShops-rekomandonPopUp"
        style={{
          display: hoveredItem !== null ? 'block' : 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          // visibility: isopen ? 'visible' : 'hidden',
          // opacity: isopen ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        
        <p>GlobeShops Rekomandon</p>
        
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
            <button> <i className="ph ph-x"></i> </button>
          </div>
        
          <hr className="hr"/>
        
          <h4>Te gjitha Kategorite</h4>
        
          <ul className="emri-lista">

            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/product.html">Product page</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li> 
            
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/products.html">ALL Products page</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>
        
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/servisi.html">Servisi jone</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>
            
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/suportiKlientit.html">Suproti Klinetit</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>
            
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/faqjaKontakteve.html">Faqja e Kontakteve</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>
            
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/dyqanetTona.html">Dyqanet Tona</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>
            
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
              <a href="./html pages/livechat.html">Live Chati per pyetje</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>
            
            <li className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
              <a href="/html pages/perKompanine.html">Per Kompanine</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg></a>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default NavPopUp
