import React from 'react'

const ButtonChildNav = ({paragraf, onClick}) => {



  return (
    <div>
        <button className="navbarButoni" onClick={onClick}>
            <i className="fa-solid fa-bars"></i>
            <p> {paragraf} </p>
        </button>
    </div>
  )
}

export default ButtonChildNav