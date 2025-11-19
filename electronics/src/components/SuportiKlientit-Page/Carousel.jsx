import React, { useEffect, useRef, useState } from 'react';

function Carousel({ items, autoPlayMs = 3000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (autoPlayMs <= 0) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, autoPlayMs);
    return () => clearInterval(timerRef.current);
  }, [items.length, autoPlayMs]);

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <div className='carousel'>
      <div className='carousel-track' style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((node, i) => (
          <div className='carousel-slide' key={i}>{node}</div>
        ))}
      </div>
      <button className='carousel-btn left' onClick={() => go(-1)} aria-label='Previous'>‹</button>
      <button className='carousel-btn right' onClick={() => go(1)} aria-label='Next'>›</button>
      <div className='carousel-dots'>
        {items.map((_, i) => (
          <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;