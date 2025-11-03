import React from "react";
import Navbar from "./Home-page/Navbar/Navbar";
import Footer from "./Home-page/Footer/Footer";
import "./Servisi-page/firstComponent/FirstComponent.css";
import { useState, useEffect } from "react";

const Servisi = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Counts up from 0 to target over durationMs; returns a formatted number string
  function useCountUp(target, durationMs = 1500, fractionDigits = 0) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let animationFrameId;
      const start = performance.now();

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / durationMs);
        const current = target * progress;
        setValue(current);
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrameId);
    }, [target, durationMs]);

    return value.toFixed(fractionDigits);
  }

  return (
    <div>
      <Navbar />
      {/*          kontenti i  faqes                         */}
      <section className="faqjaPare-dyqanet">
        <div className="dyqanet-globe">
          <svg width={32} height={32} viewBox="0 0 24 24">
            <path d="m10.8686 2.2245-7.5 6.1068A1 1 0 0 0 3 9.1068V16c0 2.7614 2.2386 5 5 5h8c2.7614 0 5-2.2386 5-5V9.1068a1 1 0 0 0-.4165-.8121l-8.5-6.1068a1 1 0 0 0-1.2149.0366m.6684 2.0335L19 9.619V16c0 1.6569-1.3431 3-3 3H8l-.1763-.005C6.249 18.9036 5 17.5976 5 16V9.582z"></path>
          </svg>
          <svg width={32} height={32} viewBox="0 0 24 24">
            <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"></path>
          </svg>
          <a href="">Të gjitha dyqanet e Globe</a>
        </div>
        <div>
          <h1>Servisi</h1>
        </div>
      </section>

      <section className="faqjaPare">
        <div className="seksioni1">
          <img
            src="https://cms-images.mmst.eu/hzxov1nxpus5/1R7X7qh9oOSEtHWiUoYDML/c7496952367130a012b98fe9fc14d1f4/Servizi_Box_TOP.jpg?q=70&fm=webp&w=700&h=400"
            className="imazhi-seksionit1"
            alt=""
          />
          <div>
            <h3>SHËRBIMET BOTËRORE MEDIALE</h3>
            <span> </span>
            <p>
              Imagjinoni se çfarë mund të bëni me Shërbimet tona! Në <br />
              <b>E-commerceShop</b> do të gjeni më të mirën e teknologjisë, por
              edhe <b>një botë shërbimesh të përshtatshme për çdo nevojë</b>.
              Ekspertët tanë në dyqan do t'ju udhëzojnë{" "}
              <b>në zgjedhjen e zgjidhjeve</b> më të mira të dedikuara{" "}
              <b>për produktet tuaja.</b>
            </p>
            <span> </span>
            <span>
              Ne <b>mund të riparojmë shpejt pajisjen tuaj të dëmtuar</b> ose të
              aplikojmë shumë lloje filmash mbrojtës, mund të kalibrojmë
              televizorin tuaj <b>për një imazh të përsosur</b>, t'ju ofrojmë{" "}
              <b>zgjidhje pagese të personalizuara</b> ose t'ju ofrojmë
              konsulencë <b>teknologjike</b>.
            </span>
            <span> </span>
            <p>
              Në këtë seksion mund të zbuloni të gjitha shërbimet e ofruara në
              dyqan, online dhe <b>madje edhe në shtëpi</b>. Çfarë prisni,{" "}
              <b>Le të shkojmë</b>!
            </p>
          </div>
        </div>
        <div className="info-servisi">
          <h1>Zbuloni Shërbimet tona bazuar në produktin tuaj</h1>
          <span>
            Shërbimet tona janë të përshtatshme për çdo blerje apo produkt
            tuajën, shfletoni sipas kategorive dhe zbuloni të gjitha!
          </span>
        </div>

        <section className="section stats" data-reveal>
          <div className="stat">
            <div className="stat-value">{useCountUp(12345, 1200, 0)}</div>
            <div className="muted">Active users</div>
          </div>
          <div className="stat">
            <div className="stat-value">{useCountUp(98, 1000, 0)}%</div>
            <div className="muted">Uptime this week</div>
          </div>
          <div className="stat">
            <div className="stat-value">{useCountUp(4.9, 1200, 1)}</div>
            <div className="muted">Average rating</div>
          </div>
        </section>

        <section className="section faq" data-reveal>
          <h2>FAQ</h2>
          {[
            {
              q: "How does dark mode work?",
              a: "We apply a theme class to the root container and style using CSS variables and overrides.",
            },
            {
              q: "Does it affect performance?",
              a: "No, it is purely CSS driven with lightweight animations.",
            },
            {
              q: "Can I customize colors?",
              a: "Yes, update the theme styles in your CSS to match your brand.",
            },
          ].map((item, idx) => (
            <div
              className={`accordion-item ${openIdx === idx ? "open" : ""}`}
              key={idx}
            >
              <button
                className="accordion-header"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="caret">▶</span>
                {item.q}
              </button>
              <div className="accordion-content">
                <p className="muted">{item.a}</p>
              </div>
            </div>
          ))}
        </section>

        <hr />

        <section className="section" data-reveal>
          <h2>Modal</h2>
          <p className="muted">Open a modal dialog with smooth animations.</p>
          <div className="actions">
            <button className="primary" onClick={() => setModalOpen(true)}>
              Open modal
            </button>
          </div>
        </section>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Plain React Modal"
          actions={
            <>
              <button
                className=" primary"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className=" primary"
                onClick={() => {
                  setModalOpen(false);
                  push("Saved!", { type: "success" });
                }}
              >
                Save
              </button>
            </>
          }
        >
          <p className="muted">
            This modal is built with plain React and CSS transitions. Press Esc
            or click the backdrop to close.
          </p>
        </Modal>

        <hr />

      </section>

      {/*                      fundi i kontentit te faqes                                  */}
      <Footer />
    </div>
  );
};

export default Servisi;

// componenti child i modal

function Modal({ open, onClose, title, children, actions }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={`modal ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="modal-backdrop" onClick={onClose} />
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {actions && <div className="modal-footer">{actions}</div>}
      </div>
    </div>
  );
}
