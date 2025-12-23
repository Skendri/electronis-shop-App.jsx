import './PopUpDyqani.css'

const PopUpDyqani = ({ butoniDyqani }) => {
  return (
    <div id="wrapper">
      <div
        className={`ZgjidhDyqanin ${butoniDyqani ? "hapPopUpZgjidhDyqanin" : " "}`}
        id="ZgjidhDyqanin"
      >
        <div className="ZgjidhDyqanin-Popup">
          <p>Zgjidhni dyqanin</p>
          <button>
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="ZgjidhDyqanin-input">
          <p>
            Fut kodin postar ose qytetin për të parë dyqanet pranë teje. Në këtë
            mënyrë do të mund të kontrolloni disponueshmërinë e produkteve në
            dyqan.
          </p>
          <div className="kerko-dyqanin">
            <input
              type="text"
              placeholder="Kerkoni sipas kodit postar ose qytetit"
            />
            <button>
              {" "}
              Kerko
              <i />{" "}
            </button>
          </div>

          <hr className="hr-ZgjidhDyqanin" />

          <button className="dyqaniZgjedhur-btn">Zgjidhni dyqanin</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpDyqani;
