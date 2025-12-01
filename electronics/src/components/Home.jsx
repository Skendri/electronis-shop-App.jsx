import React from 'react'
import Navbar from '../components/Home-page/Navbar/Navbar'
import Slider from '../components/Home-page/FirstComponent/Slider'
import KartaMadheSlider from '../components/Home-page/SecondComponent/KartaMadheSlider'
import SliderProduct from '../components/Home-page/ThirdComponent/SliderProduct'
import BaneriMadh from '../components/Home-page/FourthComponent/BaneriMadh'
import KartatOferta from '../components/Home-page/FifthComponent/KartatOferta'
import GlobeSector from '../components/Home-page/sixthCopmonent/GlobeSector'
import ProductCard from '../components/Home-page/EightthComponent/ProductCard'
import ItemsCategory from '../components/Home-page/NinthComponent/ItemsCategory'
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
        <BaneriMadh header={"E-commerce Shops Klub"} paragraf={" Hyni ne nje bote shperblimesh dhe perfitimesh me programin e ri te besnikerise! Ju shperblejme menjehere dhe gjithnje e me shume. A nuk eshte e mrekullueshme?"} ahref={" Shperblejeni veten tani"}/>
        <KartatOferta />
        <GlobeSector/>
        <BaneriMadh header={"Shërbimet E-commerceShops të krijuara për ju!"} ahref={" Shperblejeni veten tani"}/>
        <ProductCard />
        <ItemsCategory />
        <BaneriMadh header={"Gjeni produktin me te pershtatshem me Asistent tane Digjitale"} ahref={"Zbuloni me shume"} />
        <Cards />
        <CardsInfo />
        <Footer/>

    </div>
  )
}

export default Home