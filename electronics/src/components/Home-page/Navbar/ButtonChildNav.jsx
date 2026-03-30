import React from 'react'

const ButtonChildNav = ({paragraf, onClick, showCartIcon = false, itemCount = 0}) => {

  return (
    <div>
        <button className="navbarButoni" onClick={onClick}>
            <div className="button-content">
                <div className="icon-container">
                    <i className={ paragraf === "Te gjithe katergorite" ? "fa-solid fa-bars" : "fa-solid fa-cart-shopping"}></i>
                    {showCartIcon && itemCount > 0 && (
                        <span className="cart-badge">{itemCount}</span>
                    )}
                </div>
                <p> {paragraf} </p>
            </div>
        </button>
    </div>
  )
}

export default ButtonChildNav
