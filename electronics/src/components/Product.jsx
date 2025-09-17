
import React from "react";
import Navbar from "./Home-page/Navbar/Navbar";
import Footer from "./Home-page/Footer/Footer";
import Section01 from "./Product-page/firstComponent/Section01";
import PershkrimiProduktit from "./Product-page/secondComponent/PershkrimiProduktit";
import SlideriReklames from "./Product-page/thirdComponent/SlideriReklames";
import LandingPage from "./Product-page/fourthComponent/LandingPage";



const product = () => {
  return (
    <>
    <Navbar />;
      <section>
        {/*             page content              */}
        <Section01/>
        
        <div className="produkti-pershkrimi">
          <PershkrimiProduktit/>
          {/*                 slideri i reklames                           */}
          <SlideriReklames/>
          {/*                 slideri i reklames                           */}

          {/* landing page double */}
          <LandingPage/>
          {/* landing page double */}
        </div>
        
      </section>{" "}
      {/* fundi i faqeve te produktit */}
      <Footer />;
    </>
  );
};



export default product;
