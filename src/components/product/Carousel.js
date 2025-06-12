import React, { useRef } from 'react';

const Carousel = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={trackRef}>
        <div className="carousel-arrow left" onClick={scrollLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        {[...Array(10)].map((_, i) => (
          <div className="carousel-item" key={i + 1}>
            {i + 1}
          </div>
        ))}
        <div className="carousel-item">...</div>
        <div className="carousel-item">99</div>

        <div className="carousel-arrow right" onClick={scrollRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
