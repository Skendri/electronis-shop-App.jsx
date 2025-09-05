import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
  return (
  <div className="container-landingPage">
  <div className="container">
    <div className="split left">
      <h1>Apple</h1>
      <button className="btn">Buy Now</button>
    </div>
    <div className="split right">
      <h1>Samsung</h1>
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default LandingPage