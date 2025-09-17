import logo from '../../../assets/images/amazon-logo-white.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

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
          boxShadow: '2px 2px 30px rgba(202, 200, 200, 1)',
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
            <Link to="/"> <img src={logo} alt="logo"/> </Link> 
            <button> <i className="ph ph-x"></i> </button>
          </div>
        
          <hr className="hr"/>
        
          <h4>Te gjitha Kategorite</h4>
        
          <ul className="emri-lista">
            
            <Link to="/Products"  className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>ALL Products page</Link>

            <Link to="/Product" className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>Product page</Link>
        
            <Link to="/Servisi" className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Servisi jone</Link> 
            
            <Link to="/" className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Suproti Klinetit</Link>

            <Link to="/"  className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>Faqja e Kontakteve</Link> 

            <Link to="/" className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>Dyqanet Tona</Link> 

            <Link to="/" className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>Live Chati per pyetje</Link> 

            <Link to="/" className="kategoriPopUp" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>Per Kompanine</Link>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default NavPopUp
