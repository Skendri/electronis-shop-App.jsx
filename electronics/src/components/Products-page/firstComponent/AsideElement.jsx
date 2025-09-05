import React, { useState, useRef } from "react";
import "./AsideElement.css";

const AsideElement = () => {

      const [isOpen, setIsOpen] = useState(false);
      const [isOpenNismat, setIsOpenNismat] = useState(false);
      const [isOpenTheksuar, setIsOpenTheksuar] = useState(false);
      const buttoni = useRef(null);
      const buttoniNismat = useRef(null);

      function toggle() {
        setIsOpen(!isOpen);
      };

      function toggleNismat() {
        setIsOpenNismat(!isOpenNismat);
      };

      function toggleTheksuar() {
        setIsOpenTheksuar(!isOpenTheksuar);
      };


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

        <SliderComponent
        name={"Cmimi"}
        toggle={toggle}
        isOpen={isOpen}
        ref={buttoni}/>

        <hr />

        <ProductCustomization
          header={"Nismat ne vazhdim"}
          paragarf1={"Dorezimi FALAS"}
          paragarf2={"KTHIMI NE SHKOLLE"}
          paragarf3={"OUTLET"}
          toggleNismat={toggleNismat}
          isOpenNismat={isOpenNismat}
          ref={buttoniNismat}
        />

        <hr />

        <TheksuarContent
          header={"E theksuar"}
          paragarf1={"ME TE SHITURAT"}
          paragarf2={"GLOBESHOPS REKOMANDON"}
        />

        <hr />

        <RatingCopmonent header={"Rating"} paragraph={"Te Gjitha Komentet"} />

        <hr />

        <SliderComponent name={"Cmimi 2"} />

        <hr />

        <Telefonat 
        header={"Telefonat"} 
        iphone={"Iphone"} 
        samsungGalaxy={"Samsung Galaxy"} 
        xiaomi={"Xiaomi"} 
        google={"Google"} 
        onePlus={"OnePlus"} 
        lG={"LG"} 
        sony={"Sony"} 
        blackBerry={"BlackBerry"} />

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
        gold={"Gold"} />

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
        lG={"LG"} sony={"Sony"} 
        blackBerry={"BlackBerry"} />

        <hr />
      </div>
    </>
  );
};

const SliderComponent = React.forwardRef(({ name, toggle, isOpen }, ref) => {
  return (
    <div>
      <div id="kontenieri-filter">
        <div className="products-row-btn">
          <button onClick={toggle} className="products-butonat" data-target="price-toggle-btn-1">
            <p>{name}</p>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
          </button>
        </div>

        <div ref={ref} style={{ display: isOpen ? "none" : "block"}} id="price-toggle-btn-1" className="toggle-section">
          <div id="content-1">
            <div className="range">
              <input
                className="range-min-input"
                type="number"
                placeholder="Nga 0 $"
              />
            </div>

            <div className="range">
              <input
                type="number"
                className="range-max-input"
                placeholder="Te 200 $"
              />
            </div>
          </div>

          <div className="kontenieri-filter2">
            <div className="rreshkitesi">
              <div className="progresi"></div>
            </div>

            <div className="inputi-range">
              <input
                type="range"
                className="range-min-input"
                min="0"
                max="200"
                value="0"
              />
              <input
                type="range"
                className="range-max-input"
                min="0"
                max="200"
                value="200"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

const ProductCustomization = React.forwardRef(({ header, paragarf1, paragarf2, paragarf3, toggleNismat, isOpenNismat }, ref) => {
  return (
    <>
      <div className="products-col-btn">
        <button onClick={toggleNismat} className="products-butonat" data-target="nismat-content">
          <p>{header}</p>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
        </button>

        {!isOpenNismat && (
          <div ref={ref} style={{ display: isOpenNismat ? "none" : "block"}} id="nismat-content" className="toggle-section">
            <div id="togle">
              <label>
                {" "}
                <input type="checkbox" /> <p>{paragarf1}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" /> <p>{paragarf2}</p>{" "}
              </label>
              <label>
                {" "}
                <input type="checkbox" /> <p>{paragarf3}</p>{" "}
              </label>
            </div>
          </div>
        )}

      </div>
    </>
  );
})

function TheksuarContent({ header, paragarf1, paragarf2, toggleTheksuar, isOpenTheksuar }) {
  return (
    <>
      <div className="products-col-btn">
        <button onClick={toggleTheksuar} className="products-butonat" data-target="theksuar-content">
          <p>{header}</p>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
        </button>

        { !isOpenTheksuar && (<div id="theksuar-content" className="toggle-section">
          <div>
            <label>
              {" "}
              <input type="checkbox" />
              <p>{paragarf1}</p>{" "}
            </label>
            <label>
              {" "}
              <input type="checkbox" />
              <p>{paragarf2}</p>{" "}
            </label>
          </div>
          </div>)
        }
      </div>
    </>
  );
}

function RatingCopmonent({ header, paragraph }) {
  return (
    <>
      <div className="products-col-btn">
        <button className="products-butonat" data-target="rating-content">
          <p>{header}</p>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
        </button>

        <div id="rating-content" className="toggle-section">
          <div>
            <label>
              {" "}
              <input type="checkbox" /> &#11088; &#11088; &#11088; &#11088;
              &#11088; &#11088;{" "}
            </label>
            <label>
              {" "}
              <input type="checkbox" /> &#11088; &#11088; &#11088; &#11088;
              &#11088;{" "}
            </label>
            <label>
              {" "}
              <input type="checkbox" /> &#11088; &#11088; &#11088;{" "}
            </label>
            <label>
              {" "}
              <input type="checkbox" /> &#11088;
            </label>
            <label>
              {" "}
              <input type="checkbox" />
              <p>{paragraph}</p>{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

function Ngjyrat({header, argjendi, gri, ezeze, roze, blu, jeshile, kafe, gold}) {
  return (
  <>
    <div className="products-col-btn">
      <button className="products-butonat" data-target="color-content">
        <p>{header}</p>
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
        </svg>
      </button>
      
      <div id="color-content" className="toggle-section">
        <div>
          <div className="itemconfiguration">
            <label>
              {" "}
              <input type="checkbox" />
              <p>{argjendi}</p>{" "}
            </label>
            
            <label>
              {" "}
              <input type="checkbox" />
              <p>{gri}</p>{" "}
            </label>
            
            <label>
              {" "}
              <input type="checkbox" />
              <p>{ezeze}</p>{" "}
            </label>
            
            <label>
              {" "}
              <input type="checkbox" />
              <p>{roze}</p>{" "}
            </label>
            
            <label>
              {" "}
              <input type="checkbox" />
              <p>{blu}</p>{" "}
            </label>
            
            <label>
              {" "}
              <input type="checkbox" />
              <p>{jeshile}</p>{" "}
            </label>
            
            <label>
              {" "}
              <input type="checkbox" />
              <p>{kafe}</p>{" "}
            </label>
              
            <label>
              {" "}
              <input type="checkbox" />
              <p>{gold}</p>{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

function Telefonat({header, iphone, samsungGalaxy, xiaomi, google, onePlus, lG, sony, blackBerry}) {
  return (
    <>
    <div className="products-col-btn">
          <button className="products-butonat" data-target="telefonat">
            <p>{header}</p>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
          </button>
          <div id="telefonat" className="toggle-section">
            <div>
              <div className="itemconfiguration">
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{iphone}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{samsungGalaxy}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{xiaomi}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{google}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{onePlus}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{lG}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{sony}</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>{blackBerry}</p>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AsideElement;