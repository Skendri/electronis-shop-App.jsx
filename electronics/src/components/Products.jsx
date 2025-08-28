import React from 'react'
import Navbar from './Home-page/Navbar/Navbar'
import Footer from './Home-page/Footer/Footer'
import AsideElement from './Products-page/firstComponent/AsideElement'
import CardsComponent from './Products-page/SecondComponent/CardsComponent'

const Products = () => {
  return (
    <div>
        <Navbar />
        
          {/* <!--                   PRODUCTS page                             --> */}
  <div className="products-container" id="products-container">
    <AsideElement/>
     {/* <!--                divi madh fare i kontenierit anesore              --> */}
    
    <CardsComponent/>
  </div>

        <Footer/>
    </div>
  )
}

export default Products