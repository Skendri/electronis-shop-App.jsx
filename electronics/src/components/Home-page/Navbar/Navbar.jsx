import React from 'react'
import './navbar.css'
import Linktop from './Linktop'
import NavElem from './NavElem'


const Navbar = ({isopen, butoniDyqani}) => {

   
  
  return (
  <>

    {/*        ketu nis komplet navbari              */}
  <div className="navi">

    <Linktop/>

    <NavElem PopUpDyqani={butoniDyqani}  isopen={isopen}/>
    
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