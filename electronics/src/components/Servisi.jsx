import { useRef } from "react";
import Navbar from "./Home-page/Navbar/Navbar";
import ToastCenter, { useToasts } from "./Servisi-page/ToastCenter";
import Inbox from "./Servisi-page/Inbox";
import Footer from "./Home-page/Footer/Footer";
import "./Servisi-page/firstComponent/FirstComponent.css";
import { useState, useEffect } from "react";

const Servisi = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
    const { toasts, push, remove } = useToasts()

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

      {/* 1) Slide - Translate with arrows + dots (autoplay) */}
      <section className='section' data-reveal>
        <h2>Slider 1 — Translate with arrows and dots</h2>
        <SliderTranslate items={demoSlides(6)} autoplayMs={2600} />
      </section>

      {/* 2) Slider - Crossfade */}
      <section className='section' data-reveal>
        <h2>Slider 2 — Smooth crossfade</h2>
        <SliderFade items={demoSlides(5)} autoplayMs={3000} />
      </section>

      {/* 3) Slider - Coverflow 3D */}
      <section className='section' data-reveal>
        <h2>Slider 3 — 3D coverflow</h2>
        <SliderCoverflow items={demoSlides(7)} />
      </section>

      {/* 4) Vertical slider */}
      <section className='section' data-reveal>
        <h2>Slider 4 — Vertical</h2>
        <SliderVertical items={demoSlides(5)} autoplayMs={2200} />
      </section>

      {/* 5) Infinite marquee carousel */}
      <section className='section' data-reveal>
        <h2>Slider 5 — Infinite marquee</h2>
        <Marquee items={demoSlides(8)} speedPxPerSec={80} />
      </section>

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
        {/*      modal secition         */}
        <ToastCenter toasts={toasts} onDismiss={remove} />
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
        {/*      modal secition         */}
        <hr />
        
        <section className='section' data-reveal>
          <h2>Inbox</h2>
          <Inbox
            messages={[
              { id: 1, title: 'Welcome to the app', preview: 'Thanks for trying this demo.', read: false },
              { id: 2, title: 'Update available', preview: 'We shipped a new feature.', read: true },
              { id: 3, title: 'Tips & tricks', preview: 'Learn advanced keyboard shortcuts.', read: false },
            ]}
            onToggleRead={(id) => push(id % 2 ? 'Toggled read' : 'Toggled unread', { type: 'info' })}
          />
        </section>


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



// componenti i sliderit child

function SliderTranslate({ items, autoplayMs = 0 }) {
  const [idx, setIdx] = useState(0)
  const total = items.length
  useEffect(() => {
    if (!autoplayMs) return
    const id = setInterval(() => setIdx((i) => (i + 1) % total), autoplayMs)
    return () => clearInterval(id)
  }, [autoplayMs, total])

  const go = (to) => setIdx((to + total) % total)
  return (
    <div style={{ position: 'relative', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: `${total * 100}%`, transform: `translateX(-${(idx * 100) / total}%)`, transition: 'transform 520ms cubic-bezier(.2,.7,.2,1)' }}>
        {items.map((s) => (
          <div key={s.id} style={{ width: `${100 / total}%`, padding: 16 }}>
            <SlideCard {...s} />
          </div>
        ))}
      </div>
      <Arrow dir='left' onClick={() => go(idx - 1)} />
      <Arrow dir='right' onClick={() => go(idx + 1)} />
      <Dots total={total} active={idx} onSelect={go} />
    </div>
  )
}


// Helpers and slider implementations kto jan ndihmesa per sliderat me lart (komponentet e sliderit)
function demoSlides(n) {
  return Array.from({ length: n }).map((_, i) => ({
    id: i,
    title: `Slide ${i + 1}`,
    color: `hsl(${(i * 40) % 360} 80% 55%)`,
    sub: 'Beautiful gradients and soft shadows'
  }))
}

function SlideCard({ title, sub, color }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${color}, #111827 120%)`,
      borderRadius: 16,
      padding: 24,
      color: 'white',
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      boxShadow: '0 10px 24px rgba(0,0,0,0.25)'
    }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p className='muted' style={{ marginTop: 4, color: 'rgba(255,255,255,0.8)' }}>{sub}</p>
    </div>
  )
}

function Dots({ total, active, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 }}>
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => onSelect(i)} style={{
          width: 8, height: 8, borderRadius: 999, border: 0,
          background: i === active ? 'var(--text)' : 'var(--border)', cursor: 'pointer'
        }} />
      ))}
    </div>
  )
}

function Arrow({ dir = 'left', onClick }) {
  const isLeft = dir === 'left'
  return (
    <button onClick={onClick} aria-label={isLeft ? 'Previous slide' : 'Next slide'} style={{
      position: 'absolute', top: '50%', transform: 'translateY(-50%)',
      [isLeft ? 'left' : 'right']: 8,
      border: 0, background: 'rgba(0,0,0,0.35)', color: 'white', width: 36, height: 36,
      borderRadius: 999, cursor: 'pointer', display: 'grid', placeItems: 'center',
      backdropFilter: 'blur(2px)'
    }}>
      <span style={{ transform: `translateX(${isLeft ? '-1px' : '1px'})` }}>{isLeft ? '‹' : '›'}</span>
    </button>
  )
}


// 2) Fade slider childi
function SliderFade({ items, autoplayMs = 0 }) {
  const [idx, setIdx] = useState(0)
  const total = items.length
  useEffect(() => {
    if (!autoplayMs) return
    const id = setInterval(() => setIdx((i) => (i + 1) % total), autoplayMs)
    return () => clearInterval(id)
  }, [autoplayMs, total])

  const go = (to) => setIdx((to + total) % total)
  return (
    <div style={{ position: 'relative', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', padding: 16, height: 232 }}>
      {items.map((s, i) => (
        <div key={s.id} style={{
          position: 'absolute', inset: 16,
          opacity: i === idx ? 1 : 0,
          transform: i === idx ? 'scale(1)' : 'scale(0.98)',
          transition: 'opacity 600ms ease, transform 600ms ease'
        }}>
          <SlideCard {...s} />
        </div>
      ))}
      <Arrow dir='left' onClick={() => go(idx - 1)} />
      <Arrow dir='right' onClick={() => go(idx + 1)} />
      <Dots total={total} active={idx} onSelect={go} />
    </div>
  )
}


// 3) Coverflow slider child
function SliderCoverflow({ items }) {
  const [idx, setIdx] = useState(0)
  const total = items.length
  const go = (to) => setIdx((to + total) % total)
  return (
    <div style={{ position: 'relative', padding: '24px 0', borderRadius: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, perspective: 1000 }}>
        {items.map((s, i) => {
          const offset = i - idx
          const isCenter = offset === 0
          const z = isCenter ? 60 : 0
          const r = offset * -18
          const t = `translateX(${offset * 60}px) translateZ(${z}px) rotateY(${r}deg)`
          const o = Math.max(0.2, 1 - Math.abs(offset) * 0.25)
          return (
            <div key={s.id} onClick={() => go(i)} style={{
              transform: t,
              transformStyle: 'preserve-3d',
              transition: 'transform 520ms cubic-bezier(.2,.7,.2,1), opacity 320ms',
              opacity: o,
              cursor: 'pointer'
            }}>
              <div style={{ width: 260 }}>
                <SlideCard {...s} />
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
        <button className='btn tertiary' onClick={() => go(idx - 1)}>Prev</button>
        <button className='btn primary' onClick={() => go(idx + 1)}>Next</button>
      </div>
    </div>
  )
}

// 4) Vertical slider child
function SliderVertical({ items, autoplayMs = 0 }) {
  const [idx, setIdx] = useState(0)
  const [slideH, setSlideH] = useState(0)
  const containerRef = useRef(null)
  const total = items.length

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setSlideH(el.clientHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    if (!autoplayMs) return
    const id = setInterval(() => setIdx((i) => (i + 1) % total), autoplayMs)
    return () => clearInterval(id)
  }, [autoplayMs, total])

  const go = (to) => setIdx((to + total) % total)
  const translateY = -(idx * slideH)
  return (
    <div ref={containerRef} style={{ position: 'relative', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', height: 280 }}>
      <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 8, zIndex: 1 }}>
        <button className='btnUp tertiary' onClick={() => go(idx - 1)}>Up</button>
        <button className='btnDown primary' onClick={() => go(idx + 1)}>Down</button>
      </div>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          willChange: 'transform',
          transform: `translateY(${translateY}px)`,
          transition: 'transform 520ms cubic-bezier(.2,.7,.2,1)'
        }}>
          {items.map((s) => (
            <div key={s.id} style={{ height: slideH || 240, padding: 16, boxSizing: 'border-box' }}>
              <SlideCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 5) Infinite marquee child
function Marquee({ items, speedPxPerSec = 20 }) {
  const trackRef = useRef(null)
  const [w, setW] = useState(0)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const update = () => setW(el.scrollWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const duration = w ? w / speedPxPerSec : 20
  const content = [...items, ...items]
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
      <div ref={trackRef} style={{
        display: 'flex', gap: 12, padding: 12, willChange: 'transform',
        animation: `marquee ${duration}s linear infinite`
      }}>
        {content.map((s, i) => (
          <div key={i} style={{ width: 220, flex: '0 0 auto' }}>
            <SlideCard {...s} />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}