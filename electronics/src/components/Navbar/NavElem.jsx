
import '../Navbar/navbar.css'
import logo from '../../assets/images/amazon-logo-white.png'
// import NavPopUp from './NavPopUp'

const NavElem = ({click}) => {


  return (
    <div>
        {/* <NavPopUp/> */}
        <div className="naviPosht" id="naviPosht">
            <div className="responsive-row">
                <a href="">
                    <img src={logo} alt="logo-image"/>
                </a>
                
                <button className="navbarButoni" onClick={click}>
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
                <button  className="butoniDyqani" onClick='{hapPopUpDyqani()}'>
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
    </div>
  )
  
//   function hapPopUp(){
//         if(isopen === false){
//             setIsOpen(true);
//             setIsOpen(".hapPopUpZgjidhDyqanin");
//             setIsOpen(".hapPerdja-Zeze-ZgjidhDyqanin");
//             console.log("hapet");
//         } else {
//             setIsOpen(false);
//             setIsOpen(".hapPopUpZgjidhDyqanin");
//             setIsOpen(".hapPerdja-Zeze-ZgjidhDyqanin");
//             console.log("mbyllet");
//         };
//     }

    // function handleClick(){
    //     if(!isopen){
    //         setIsOpen(<NavPopUp/>);
    //         console.log("butoni u klikua nga useri", Boolean(isopen));
    //     } else {
    //         setIsOpen(false);
    //         console.log("butoni u klikua nga useri", Boolean(isopen));
    //     }
    // }
}

// hapPopUp()







export default NavElem