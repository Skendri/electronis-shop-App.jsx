import React, { useState } from "react";
import "./AsideElement.css";
import SliderComponent from "./SliderChild";
import ProductCustomization from "./ProductCustomization";
import TheksuarContent from "./TheksuarContent";
import RatingCopmonent from "./RatingCopmonent";
import Telefonat from "./Telefonat";
import Ngjyrat from "./Ngjyrat";

const AsideElement = () => {

  return (
    <>
      <div className="marka-majtas">
        <h3 className="titulli-perzgjedhjes">Ora inteligjente Xiaomi</h3>
        <img
          className="imazhi-markes"
          src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_96630724/mobilecms_x_72_png"
          alt=""
        />

        <hr />

        <SliderComponent />

        <hr />

        <ProductCustomization
          header={"Nismat ne vazhdim"}
          paragarf1={"Dorezimi FALAS"}
          paragarf2={"KTHIMI NE SHKOLLE"}
          paragarf3={"OUTLET"}
        />

        <hr />

        <TheksuarContent paragarf1={"ME TE SHITURAT"} paragarf2={"GLOBESHOPS REKOMANDON"} />

        <hr />

        <RatingCopmonent header={"Rating"} paragraph={"Te Gjitha Komentet"} />

        <hr />

        <SliderComponent />

        <hr />

        <Telefonat
          iphone={"Iphone"}
          samsungGalaxy={"Samsung Galaxy"}
          xiaomi={"Xiaomi"}
          google={"Google"}
          onePlus={"OnePlus"}
          lG={"LG"}
          sony={"Sony"}
          blackBerry={"BlackBerry"}
        />

        <hr />

        <Ngjyrat
          header={"Ngjyrat"}
          argjendi={"Argjendi"}
          gri={"Gri"}
          ezeze={"E zeze"}
          roze={"Roze"}
          blu={"Blu"}
          jeshile={"Jeshile"}
          kafe={"Kafe"}
          gold={"Gold"}
        />

        <hr />

        <SliderComponent name={"Cmimi 3"} />

        {/* <!--                vazhdimi    i toggle          --> */}
        <Telefonat
          header={"Telefonat"}
          iphone={"Iphone"}
          samsungGalaxy={"Samsung Galaxy"}
          xiaomi={"Xiaomi"}
          google={"Google"}
          onePlus={"OnePlus"}
          lG={"LG"}
          sony={"Sony"}
          blackBerry={"BlackBerry"}
        />

        <hr />
      </div>
    </>
  );
};

export default AsideElement;
