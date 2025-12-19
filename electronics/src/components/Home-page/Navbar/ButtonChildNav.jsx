import React from 'react'

const ButtonChildNav = ({paragraf, onClick}) => {

  return (
    <div>
        <button className="navbarButoni" onClick={onClick}>
            <i className={ paragraf === "Te gjithe katergorite" ? "fa-solid fa-bars" : "fa-solid fa-cart-shopping"}></i>
            <p> {paragraf} </p>
        </button>
    </div>
  )
}

export default ButtonChildNav