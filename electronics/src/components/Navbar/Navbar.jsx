import React from 'react'
import './navbar.css'
import Linktop from './Linktop'
import NavElem from './NavElem'
import NavPopUp from './NavPopUp'
import PopUpDyqani from './PopUpDyqani'
import { useState } from 'react' // IGNORE: This import is necessary for state management in NavElem.jsx


const Navbar = () => {
  
  const [isopen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isopen);
  }

  const [butoniDyqani, setButoniDyqani] = useState(false);
  
  function handleClick2() {
    setButoniDyqani(!butoniDyqani);
  }


   
  
  return (
  <>
  
  {/*                   divi i perdes se zeze te popUpDyqani              */}
  <div id="perdja-zeze-zgjidhDyqani" className={`perdja-zeze-zgjidhDyqani ${butoniDyqani ? "hapPerdja-Zeze-ZgjidhDyqanin " : " perdja-zeze-zgjidhDyqani"} `} onClick={handleClick2}></div>
  
  
 <PopUpDyqani butoniDyqani={butoniDyqani}/>
    
    
    {/*                   divi i perdes se zeze te popUpi te gjitha kategorite              */}
    <div id="perdja-zeze" className={`perdja-zeze ${isopen ? "hapPopUpPerdja" : " perdja-zeze"} `} onClick={handleClick}></div>
    
  

    {/*        ketu nis komplet navbari              */}
  <div className="navi">
     <NavPopUp isopen = {isopen} />

    <Linktop/>

    <NavElem click={handleClick} clikButoni={handleClick2}/>
    
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