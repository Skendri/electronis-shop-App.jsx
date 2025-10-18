import { Link } from "react-router-dom";
import ButtonChildNav from "./ButtonChildNav";
import logo from "../../../assets/images/amazon-logo-white.png";
import NavPopUp from "./NavPopUp";
import PopUpDyqani from "./PopUpDyqani";
import { useState } from "react";
import "./navElem.css"

const NavElem = () => {
  const [isopen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isopen);
  }

  const [butoniDyqani, setButoniDyqani] = useState(false);

  function handleClick2() {
    setButoniDyqani(!butoniDyqani);
  }

  return (
    <div>
      {/*                   divi i perdes se zeze te popUpi te gjitha kategorite              */}
      <div
        id="perdja-zeze"
        className={`perdja-zeze ${isopen ? "hapPopUpPerdja" : " perdja-zeze"} `}
        onClick={handleClick}
      ></div>
      <div className="naviPosht" id="naviPosht">
        <div className="responsive-row">
          <Link to="/">
            <img src={logo} alt="logo-image" />
          </Link>
          <ButtonChildNav
            paragraf={"Te gjithe katergorite"}
            onClick={handleClick}
            isopen={isopen}
          />
          <NavPopUp isopen={isopen} />
        </div>

        <div className="navbarKerkimi">
          <i className="fa-thin fa-magnifying-glass fa-lg"></i>
          <input
            type="text"
            placeholder="Kerko produktin tend..."
            name="search"
          />
        </div>
        {/*                   divi i perdes se zeze te popUpDyqani              */}
        <div
          id="perdja-zeze-zgjidhDyqani"
          className={`perdja-zeze-zgjidhDyqani ${butoniDyqani ? "hapPerdja-Zeze-ZgjidhDyqanin " : " perdja-zeze-zgjidhDyqani"} `}
          onClick={handleClick2}
        ></div>
        <div className="zgjidhDyqanin">
          <ButtonChildNav
            paragraf={"Zgjidhni Dyqanin"}
            onClick={handleClick2}
            butoniDyqani={butoniDyqani}
          />
          <PopUpDyqani butoniDyqani={butoniDyqani} />
        </div>

        <div className="butonatDjathtas">
          <button type="menu">
            <i className="fa-solid fa-user fa-flip"></i>
          </button>
          <a href="#">
            <i className="fa-solid fa-cart-shopping fa-bounce"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavElem;
