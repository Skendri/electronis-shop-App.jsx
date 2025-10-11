import React from "react";
import { useState } from "react";
import "./PershkrimiProduktit.css";

const PershkrimiProduktit = () => {

  const [visible, setIsVisible] = useState(false);

  // function handleToggle() {
  //   setIsVisible(!visible);
  // };

  return (
    <>
      <div className="pershkrimi-produktit">
        <button id="pershkrimi-produktit" onClick= {() => setIsVisible(!visible)}>
          <h3>Pershkrimi Produktit</h3>
          <svg width={32} height={32} viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
        </button>
      </div>
      <div className="info-produktit" style={{display: visible ? "block" : "none"}} >
        <h4>Xiaomi MI Smart Band 8 Active</h4>
        <h4>1.47 Ekran ultra i gjere:</h4>
        <p>
          Dimensionet më të mëdha dhe zona e shikimit mundësojnë funksionalitet
          më të madh dhe një shfaqje më tërheqëse të informacionit dhe
          përmbajtjes. Mund të kontrolloni rrahjet e zemrës tuaj gjatë
          aktivitetit fizik ose t'i hidhni një vështrim të shpejtë lajmeve gjatë
          Udhëtimit tuaj
        </p>
        <h4>Trupi juaj 9,99 mm:</h4>
        <p>
          Dizajni i hollë dhe i rafinuar e bën atë të matur kur punoni,
          ushtroheni ose kur jeni duke fjetur, për një
        </p>
        <h4>Përvojë edhe më të rehatshme të personalizuar:</h4>
        <p>
          Ndërfaqja krejt e re dhe mbi 100 numra për të zgjedhur. ju të
          përshtatni numrin dhe rripin sipas shijeve dhe stilit tuaj.
        </p>
      </div>
    </>
  );
};

export default PershkrimiProduktit;
