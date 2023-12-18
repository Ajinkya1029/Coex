
import React, { useState, useRef, useEffect } from "react";
import carodata from "./carodata.jsx";
import Card from "./Card";
import style from './style.module.css';

function Meet() {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState({ left: true, right: false });

  useEffect(() => {
    return () => {
      clearInterval(slideTimer);
    };
  }, []); 

  let slideTimer;

  const handleHorizontalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      setArrowDisable({
        left: element.scrollLeft === 0,
        right: element.scrollLeft + element.clientWidth === element.scrollWidth
      });
    }, speed);
  };

  return (
    <div className={style.meet}>
      <h1>Meet Our Team</h1>
      <div className={style.carousel}>
        <button
          onClick={() => handleHorizontalScroll(elementRef.current, 25, 500, -20)}
          name="left"
          disabled={arrowDisable.left}
        >
          ←
        </button>
        <div className={style.caroimg} ref={elementRef}>
          {carodata.map((item, idx) => (
            <Card
              key={idx}
              id={idx}
              src={item.src}
              alt={item.alt}
              name={item.name}
              position={item.position}
              coursename={item.coursename}
              year={item.year}

              className={style.cards}
            />
          ))}
        </div>
        <button
          onClick={() => handleHorizontalScroll(elementRef.current, 25, 500, 20)}
          name="right"
          disabled={arrowDisable.right}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Meet;


