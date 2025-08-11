// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/FirstComponent/Slider'
import KartaMadheSlider from './components/SecondComponent/KartaMadheSlider'
import SliderProduct from './components/ThirdComponent/SliderProduct'

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <KartaMadheSlider />
      <SliderProduct />
    </>
  )
}

export default App
