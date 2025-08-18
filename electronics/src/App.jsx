
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/FirstComponent/Slider'
import KartaMadheSlider from './components/SecondComponent/KartaMadheSlider'
import SliderProduct from './components/ThirdComponent/SliderProduct'
import BaneriMadh from './components/FourthComponent/BaneriMadh'
import KartatOferta from './components/FifthComponent/KartatOferta'
import GlobeSector from './components/sixthCopmonent/GlobeSector'
import BaneriBlu2 from './components/SeventhComponent/baneriBlu2'
import ProductCard from './components/EightthComponent/ProductCard'

function App() {

  return (
    <>
        <Navbar />
        <Slider />
        <KartaMadheSlider />
        <SliderProduct />
        <BaneriMadh />
        <KartatOferta />
        <GlobeSector/>
        <BaneriBlu2/>
        <ProductCard />
    </>
  )
}

export default App
