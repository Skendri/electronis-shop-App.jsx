import React from 'react'
import Navbar from '../components/Home-page/Navbar/Navbar'
import Slider from '../components/Home-page/FirstComponent/Slider'
import KartaMadheSlider from '../components/Home-page/SecondComponent/KartaMadheSlider'
import SliderProduct from '../components/Home-page/ThirdComponent/SliderProduct'
import BaneriMadh from '../components/Home-page/FourthComponent/BaneriMadh'
import KartatOferta from '../components/Home-page/FifthComponent/KartatOferta'
import GlobeSector from '../components/Home-page/sixthCopmonent/GlobeSector'
import BaneriBlu2 from '../components/Home-page/SeventhComponent/baneriBlu2'
import ProductCard from '../components/Home-page/EightthComponent/ProductCard'
import ItemsCategory from '../components/Home-page/NinthComponent/ItemsCategory'
import BaneriBlu3 from '../components/Home-page/TenthComponent/BaneriBlu3'
import Cards from '../components/Home-page/ElevenComponent/Cards'
import CardsInfo from '../components/Home-page/TwelveComponent/CardsInfo'
import Footer from '../components/Home-page/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <KartaMadheSlider />
        <SliderProduct />
        <BaneriMadh />
        <KartatOferta />
        <GlobeSector/>
        <BaneriBlu2/>
        <ProductCard />
        <ItemsCategory />
        <BaneriBlu3 />
        <Cards />
        <CardsInfo />
        <Footer/>

    </div>
  )
}

export default Home