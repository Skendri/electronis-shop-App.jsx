
import { Link } from 'react-router-dom'
// import ButtonChildNav from './ButtonChildNav'
import logo from '../../../assets/images/amazon-logo-white.png'
// import { useState } from 'react';


const NavElem = ({click, clikButoni}) => {
    
    //   function handleClick() {
    //     setIsOpen(!isopen);
    //     console.log("butoni u klikua")
    //   }

  return (
  
    <div>
        {/* <div id="perdja-zeze" className={`perdja-zeze ${isopen ? "hapPopUpPerdja" : " perdja-zeze"} `} onClick={handleClick}></div> */}
            <div className="naviPosht" id="naviPosht">
                <div className="responsive-row">
                    <Link to="/"><img src={logo} alt="logo-image"/></Link>
                
                    <button className="navbarButoni" onClick={click}>
                        <i className="fa-solid fa-bars"></i>
                        <p> Te gjithe katergorite </p>
                    </button>
                    {/* <ButtonChildNav paragraf={"Te gjithe katergorite"} onClick={handleClick} isopen={isopen} /> */}
                </div>
            
                <div className="navbarKerkimi">
                    <i className="fa-thin fa-magnifying-glass fa-lg"></i>
                    <input type="text" placeholder="Kerko produktin tend..." name="search"/>
                </div>
            
                <div className="zgjidhDyqanin">
                <button  className="butoniDyqani" onClick={clikButoni}>
                        <span> Zgjidhni Dyqanin <br/> Fut koding postar ose </span>
                        <i className="ph ph-caret-down"></i>
                    </button>
                </div>
            
                <div className="butonatDjathtas">
                    <button type="menu"><i className="fa-solid fa-user fa-flip"></i></button>
                    <a href="#"><i className="fa-solid fa-cart-shopping fa-bounce"></i></a>
                </div>
                
            </div>
    </div>
)};

export default NavElem