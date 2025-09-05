import React from "react";
import "./Section01.css";

const Section01 = () => {
  return (
    <>
      <div className="mbeshtjellsi-produktit ">
        <div className="slideri-produktit">
          <div className="marka-zgjedhur">
            <svg width={32} height={32} viewBox="0 0 24 24">
              <path d="m10.8686 2.2245-7.5 6.1068A1 1 0 0 0 3 9.1068V16c0 2.7614 2.2386 5 5 5h8c2.7614 0 5-2.2386 5-5V9.1068a1 1 0 0 0-.4165-.8121l-8.5-6.1068a1 1 0 0 0-1.2149.0366m.6684 2.0335L19 9.619V16c0 1.6569-1.3431 3-3 3H8l-.1763-.005C6.249 18.9036 5 17.5976 5 16V9.582z"></path>
            </svg>
            <svg width={32} height={32} viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
            <a href="">Marka</a>
            <svg width={32} height={32} viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
            <a href="">Xiaomi</a>
            <svg width={32} height={32} viewBox="0 0 24 24">
              <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
            </svg>
            <p>Ore Inteligjente</p>
          </div>
          <div className="reviews">
            <img src="Assets\Icons\4-Star.webp" alt="" />
            <p>
              4.4(6)
              <span> | </span>
              Art.-No.212984
              <span> | </span>
              XIAOMI
            </p>
          </div>
          <h4>SMARTBAND XIAOMI MI SMART BAND 8 Active, Black</h4>
          <div id="slideri-kontentit">
            <div className="slideri-produktit-lart">
              <button onclick="prevImg()">&lt;</button>
              <img
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805474?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
                alt=""
                id="slider-image"
              />
              <button onclick="nextImg()">&gt;</button>
            </div>
            <div className="slideri-produktit-posht">
              <button onclick="prevImg()">&lt;</button>
              <img
                className="thumbnail"
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805472?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
                alt="image"
                onclick="setImage(this)"
              />
              <img
                className="thumbnail"
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805473?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
                alt="image"
                onclick="setImage(this)"
              />
              <img
                className="thumbnail"
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805474?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
                alt="image"
                onclick="setImage(this)"
              />
              <button onclick="nextImg()">&gt;</button>
            </div>
          </div>
        </div>
        <div className="opsionet-blerja-produktit">
          <p>
            E rekomanduar 24,99 €{" "}
            <span>
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 27.963 27.963"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g id="c129_exclamation">
                      {" "}
                      <path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984 C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548 c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z" />{" "}
                      <polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158 " />{" "}
                      <path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528 C16.441,19.575,15.468,18.546,13.998,18.546z" />{" "}
                    </g>{" "}
                    <g id="Capa_1_207_"> </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
          </p>
          <h3>19.99 €</h3>
          <a href="#">
            Informacion mbi: Financimi, Cmimi, Sasia, Koha e dorezimit dhe{" "}
            <br /> Marrja Eko-kontributi i TVSH dhe WEEE i perfshire
          </a>
          <hr />
          <div className="opsionet-dorezimi">
            <h4>
              Ofrohet dorezimi <span>+2,99 €</span>
            </h4>
            <p>
              Dorezimi i parashikuar 21.08.2024 - 23.08.2024 (Ne shporte,
              shkruani kodin postar dhe do te keni nje date me te sakte)
            </p>
          </div>
          <div className="opsionet-koleksioni-falas">
            <h4>Koleksioni FALAS ne dyqan</h4>
            <p>
              Kontrolloni koleksionin ne dyqan <span>Zgjidh Dyqanin &gt;</span>
            </p>
          </div>
          <div className="opsionet-shto-shporte">
            <button>Shto ne Shporte</button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
              </svg>
            </button>
          </div>
          <div className="opsionet-blerja-cmimet">
            <div>
              <h4> Mbrojtje te disponueshme per te mos u humbur</h4>
              <h5>Detajet</h5>
            </div>
            <div>
              <p>
                <input type="checkbox" />
                Mbrojtje 2 vjet per demtim dhe 2 vjet per vjedhje
              </p>{" "}
              <a href="#">+ 39,99 €</a>
            </div>
            <div>
              <p>
                <input type="checkbox" />
                Mbrojtje 1 vit per demtim dhe 1 vit per vjedhje
              </p>{" "}
              <a href="">+ 29,99 €</a>
            </div>
            <div>
              <p>
                <input type="checkbox" />
                Mbrojtje 1 vit per deshtim
              </p>{" "}
              <a href="">+ 4,99 €</a>
            </div>
            <div>
              <p>
                <input type="checkbox" />1 vit mbrojtje nga demtimet
              </p>{" "}
              <a href="">+ 9,99 €</a>
            </div>
            <div>
              <p>
                <input type="checkbox" />
                Mbrojtje 2 vite nga demtimet
              </p>{" "}
              <a href="">+ 14,99 €</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section01;
