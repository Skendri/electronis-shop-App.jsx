import React from 'react'
import './navbar.css'
import Linktop from './Linktop'
import NavElem from './NavElem'
import NavPopUp from './NavPopUp'
import { useState } from 'react' // IGNORE: This import is necessary for state management in NavElem.jsx
// import { hapPopUp} from './NavElem'

const Navbar = () => {

      const [isopen, setIsOpen] = useState(false);
      console.log(isopen);

      function handleClick() {
        setIsOpen(!isopen);
        console.log("handle click funksionon per mrekulli");
      }

  return (
  <>
  <div id="perdja-zeze-zgjidhDyqani" className="perdja-zeze-zgjidhDyqani" onClick= {handleClick}></div>
  
  {/* <div id="mbeshtjellsi-gjithaKategorite" className="mbeshtjellsi-gjithaKategorite"/> */}
    <div className="ZgjidhDyqanin" id="ZgjidhDyqanin">
      
      <div className="ZgjidhDyqanin-Popup">
        <p>Zgjidhni dyqanin</p>
        <button onClick= {handleClick}><i className="ph ph-x"></i></button>
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
    <div id="perdja-zeze" className="perdja-zeze" onClick= '{hapPopUp()}'></div>
    
   <NavPopUp isopen = {isopen}/>

    {/*        ketu nis komplet navbari              */}
  <div className="navi">

    <Linktop/>

    <NavElem click={handleClick}/>
    
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
      <label htmlFor="dark-mode" className="label">
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