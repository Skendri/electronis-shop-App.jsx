import React from 'react'
import './navbar.css'
import logo from '../../assets/images/amazon-logo-white.png'

const Navbar = () => {
  return (
  <>
  <div id="perdja-zeze-zgjidhDyqani" className="perdja-zeze-zgjidhDyqani" onclick=" hapPopUpDyqani()"></div>
  
  {/* <div id="mbeshtjellsi-gjithaKategorite" className="mbeshtjellsi-gjithaKategorite"> */}
    <div className="ZgjidhDyqanin" id="ZgjidhDyqanin">
      
      <div className="ZgjidhDyqanin-Popup">
        <p>Zgjidhni dyqanin</p>
        <button onclick="hapPopUpDyqani()"><i className="ph ph-x"></i></button>
      </div>
      
      <div className="ZgjidhDyqanin-input">
        <p>Fut kodin postar ose qytetin për të parë dyqanet pranë teje. Në këtë mënyrë do të mund të kontrolloni disponueshmërinë e produkteve në dyqan.</p>
        
        <div className="kerko-dyqanin">
          <input type="text" placeholder='Kerkoni sipas kodit postar ose qytetit'/>
          <button> Kerko<i/> </button>
        </div>
        
        <hr className="hr-ZgjidhDyqanin"/>
        
        <button className="dyqaniZgjedhur-btn">Zgjidhni dyqanin</button>
      </div>
    </div>
    {/* </div> */}
    
    {/*                   pop upi i linqeve te mouse leave                */}
    <div id="perdja-zeze" className="perdja-zeze" onclick=" hapPopUp()"></div>
    
    <ul className='kategori-GlobeShops-rekomandon' id="kategori-GlobeShops-rekomandonPopUp">
      <p>GlobeShops Rekomandon</p>
      <li>geri</li>
      <li>Telefonia</li>
      <li>Kompjuterë dhe tableta</li>
      <li>Pajisjet periferike dhe aksesoret</li>
      <li>TV dhe kinema në shtëpi</li>
      <li>Pajisje të mëdha</li>
      <li>Pajisje të vogla dhe kafe</li>
      <li>Kujdesi Personal</li>
      <li>Audio, kufje dhe navigatorë</li>
    </ul>
    
      <div id="mbeshtjellsi-gjithaKategorite" className="mbeshtjellsi-gjithaKategorite">
        <div className="listat-gjithaKategorite">
          <div className="gjithaKategorite-logoBtn">
            <img src={logo} alt="lgog"/>
            <button onclick="hapPopUp()"><i className="ph ph-x"></i></button>
          </div>
        
          <hr className="hr"/>
        
          <h4>Te gjitha Kategorite</h4>
        
         <ul className="emri-lista">
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
          
           { /* 
            <li className="kategoriPopUp"><a href="">Lojera kompjuterike dhe komponentet</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Konsolat dhe videolojerat</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Audio, kufje dhe navigatore</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Fotografi, Video dhe Drone</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Klima dhe Ngrohja</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Pastrim dhe hekurosje</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Kujdesi personal</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li>
          
            <li className="kategoriPopUp"><a href="">Shtepia e zgjuar dhe Automatizimi</a>
              <a href=""><svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path></svg>
              </a>
            </li> */}
          </ul>
        </div>
      </div>

   {/*           menu anash full link      */}
  
  <div className="navi">
     {/*              Big Nav                 */}

    <div className="naviLart">
      <a href="#">KLUB GlobeShops</a>
      <a href="#">APP MediaWorld</a>
      <a href="#">Sherbimet</a>
      <a href="#">Qendrueshmeria</a>
      <a href="#">Dyqane</a>
      <a href="#">Per Kompanite</a>
      <a href="#">Porosite</a>
      <a href="#">Mbeshtetja e klientit</a>
      <a href="#">Na Kontaktoni</a>
      <a href="#">Prize</a>
      <a href="#">Ofertat</a>
      <a href="#">Bisede Live</a>
      <a href="#">Punoni me ne</a>
      <a href="#">Revista & Guide</a>
    </div>
    {/*              listat e nav       */}

    <div className="naviPosht" id="naviPosht">
      <div className="responsive-row">
        <a href="">
          <img src={logo} alt="logo-image"/>
        </a>
        <button className="navbarButoni" onclick="hapPopUp()">
          <i className="fa-solid fa-bars"></i>
          {/* <i className="ph ph-list"></i>  */}
          <p> Te gjithe katergorite </p>
        </button>
      </div>
      <div className="navbarKerkimi">
       <i className="fa-thin fa-magnifying-glass fa-lg"></i>
        <input type="text" placeholder="Kerko produktin tend..." name="search"/>
      </div>
      <div className="zgjidhDyqanin">
        <button  className="butoniDyqani" onclick="hapPopUpDyqani()" >
          <span> Zgjidhni Dyqanin <br/>
            Fut koding postar ose
          </span>
          <i className="ph ph-caret-down"></i>
        </button>
      </div>
      <div className="butonatDjathtas">
        <button type="menu"><i className="fa-solid fa-user fa-flip"></i></button>
        <a href="#"><i className="fa-solid fa-cart-shopping fa-bounce"></i></a>
      </div>
    </div>
    {/*              navi poshte       */}
    
    <div className="baneri-zi">
      <a href="">Shkarkoni APP-in</a>
      <a href="">Financimi</a>
      <a href="">Sherbimet</a>
    </div>
    
    <div className="baneri-blu">
      <div className="baneriBrendshem">
        <i className="exclamation-mark">❗</i>
        <a href="">MBLEDHJE FALAS gjithashtu në 30 MINUTA dhe Dorëzimi FALAS në 6000 produkte!</a>
      </div>
       {/*       toggle dark mode        */}
      <input type="checkbox" id="dark-mode" className="input"/>
      <label for="dark-mode" className="label">
        <div className="circle"></div>
      </label>
      {/*  end of toggle dark mode  */}
    </div>
    {/*        Big Nav        */}
  </div>
    </>
  )
}

export default Navbar