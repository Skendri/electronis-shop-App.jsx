
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/FirstComponent/Slider'
import KartaMadheSlider from './components/SecondComponent/KartaMadheSlider'
import SliderProduct from './components/ThirdComponent/SliderProduct'
import BaneriMadh from './components/FourthComponent/BaneriMadh'
import KartatOferta from './components/FifthComponent/KartatOferta'
import { useState } from 'react'

function App() {
  const [position, setPosition] = useState({x: 0, y: 0});

  return (
    <>
      <div onPointerMove={(e) => setPosition({x: e.clientX, y: e.clientY})} style={{position: 'relative', height: '100vh', width: '100%'}}>

        <div style={{position: 'absolute', background: 'green', borderRadius: '50%', 
          transform: `translate(${position.x}px, ${position.y}px)`, 
          left: '0', right: '0', width: 40, height: 40}}></div>
        <Navbar />
        <Slider />
        <KartaMadheSlider />
        <SliderProduct />
        <BaneriMadh />
        <KartatOferta />
      </div>
    </>
  )
}

export default App
