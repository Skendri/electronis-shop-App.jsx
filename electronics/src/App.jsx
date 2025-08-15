
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/FirstComponent/Slider'
import KartaMadheSlider from './components/SecondComponent/KartaMadheSlider'
import SliderProduct from './components/ThirdComponent/SliderProduct'
import BaneriMadh from './components/FourthComponent/BaneriMadh'
import KartatOferta from './components/FifthComponent/KartatOferta'

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <KartaMadheSlider />
      <SliderProduct />
      <BaneriMadh />
      <KartatOferta />
    </>
  )
}

export default App
