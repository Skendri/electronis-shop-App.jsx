import React from 'react'
import './BaneriMadh.css'

const BaneriMadh = ({header, paragraf, ahref}) => {
  return (
    <div>
        <section className="globe-klub-baner">
            <h4> {header} </h4>
            <p>
              {paragraf}
            </p>
            
            <a href="">{ahref}</a>
        </section>
    </div>
  )
}

export default BaneriMadh