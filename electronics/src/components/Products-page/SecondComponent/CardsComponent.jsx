import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CardsComponent.css";
import CardData from "../../../Data/CardData";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";
import bannerImage from "../../../assets/images/kategori-banner-card.gif";
import SplitText from "./SplitText"

const CardsComponent = () => {
  const displayProduct = CardData;

  return (
    <>
      <div className="products-djathtas-container">
        <ProductHeader
          header={"Rezultatet e kerkimit per oren inteligjente xiaomi"}
          paragrafi={"Kerkoni ne vend te kesaj ore inteligjente xiaomi"}
          button={"Rezultate me te mira"}
          text1={"Best Product"}
          text2={"Best Product"}
          text3={"Best Product"}
          text4={"Best Product"}
          text5={"Best Product"}
        />

        <div style={{ display: "flex", padding: "2rem", justifyContent: "center" }} >
          <SplitText text="Happy buying in our online store" />
        </div>

        <img className="kategori-banner-card" src={bannerImage} />

        {/* <!--                cartat e produkteve djathtas          --> */}
        {displayProduct.map((product, i) => (
          <motion.div key={`${product.id === 2,4,6,8 ? "active" : "" } - ${i}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}>
              
            <ProductCard product={product} />
            {i === 3 && (
              <img
                className="kategori-banner-card"
                src="https://cms-images.mmst.eu/hzxov1nxpus5/iONRY5GwPN6LbTspzKJzS/16b63feb18b5eac64f1dc1e3bcabfbc2/Banner_MW_ESPORTA_Home_Teaser_Carousel_Orizz_Desk_1200x900.jpg?q=92&w=890"
              />
            )}
          </motion.div>
        ))}



        <img
          className="kategori-banner-card"
          src="https://img.freepik.com/premium-photo/box-with-ribbon-tied-around-it_337384-104388.jpg?w=1480"
        />
      </div>
    </>
  );
};





export default CardsComponent;
