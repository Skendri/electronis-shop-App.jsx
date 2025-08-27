import React from "react";
import "./AsideElement.css";

const AsideElement = () => {
  //   const propsData = [{
  //     id: 0,
  //     header: "Nismat ne vazhdim",
  //     paragarf1: "Dorezimi FALAS",
  //     paragarf2: "KTHIMI NE SHKOLLE",
  //     paragarf3: "OUTLET"
  //   },
  //   {
  //     id: 1,
  //     header: "E theksuar",
  //     paragarf1: "ME TE SHITURAT",
  //     paragarf2: "GLOBESHOPS REKOMANDON"
  //   }
  // ]

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

        <SliderComponent name={"Cmimi"} />

        <hr />

        <ProductCustomization
          header={"Nismat ne vazhdim"}
          paragarf1={"Dorezimi FALAS"}
          paragarf2={"KTHIMI NE SHKOLLE"}
          paragarf3={"OUTLET"}
        />

        <hr />

        <TheksuarContent
          header={"E theksuar"}
          paragarf1={"ME TE SHITURAT"}
          paragarf2={"GLOBESHOPS REKOMANDON"}
        />

        <hr />
        <RatingCopmonent header={"Rating"} paragraph={"Te Gjitha"} />

        <hr />

        <SliderComponent name={"Cmimi 2"} />

        <hr />

        <div className="products-col-btn">
          <button className="products-butonat" data-target="color-content">
            <p>Ngjyrat</p>
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
                  <p>Argjendi</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Gri</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>E zeze</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Roze</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Argjendi</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Gri</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>E zeze</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Roze</p>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <SliderComponent name={"Cmimi 3"} />

        {/* <!--                vazhdimi    i toggle          --> */}
        <div className="products-col-btn">
          <button className="products-butonat" data-target="telefonat">
            <p>Telefonat</p>
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
                  <p>Iphone</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Samsung Galaxy</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>XIAOMI</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Google</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>OnePlus</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>LG</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>Sony</p>{" "}
                </label>
                <label>
                  {" "}
                  <input type="checkbox" />
                  <p>BlackBerry</p>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

function SliderComponent({ name }) {
  return (
    <div>
      <div id="kontenieri-filter">
        <div className="products-row-btn">
          <button className="products-butonat" data-target="price-toggle-btn-1">
            <p>{name}</p>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
          </button>
        </div>

        <div id="price-toggle-btn-1" className="toggle-section">
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
}

function ProductCustomization({ header, paragarf1, paragarf2, paragarf3 }) {
  return (
    <>
      <div className="products-col-btn">
        <button className="products-butonat" data-target="nismat-content">
          <p>{header}</p>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
        </button>

        <div id="nismat-content" className="toggle-section">
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
      </div>
    </>
  );
}

function TheksuarContent({ header, paragarf1, paragarf2 }) {
  return (
    <>
      <div className="products-col-btn">
        <button className="products-butonat" data-target="theksuar-content">
          <p>{header}</p>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
        </button>

        <div id="theksuar-content" className="toggle-section">
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
        </div>
      </div>
    </>
  );
}

function RatingCopmonent({ header, paragraph }) {
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
}

export default AsideElement;