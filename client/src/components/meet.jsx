import React, { useState,useRef } from "react";
import carodata from "./carodata.jsx";
import style from './style.module.css'

function Card(item) {
    return <div>
        <img className={style.image}src={item.src} alt={item.alt} key={item.id} />
    </div>
}

function Meet() {
    const elementRef=useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);
    const [slide, setSlide] = useState(0);
 
    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          if (element.scrollLeft === 0) {
            setArrowDisable(true);
          } else {
            setArrowDisable(false);
          }
        }, speed);
      };

    return <div className={style.meet}>
        <h1>Meet Our Team</h1>
        <div className={style.carousel}>
            <button  onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 500, -20);
          }} name="left"  >Left</button>
           <div className={style.caroimg}ref={elementRef} >

            {carodata.map((item, idx) => {
                return (
                     <Card id={idx} src={item.src} alt={item.alt}></Card>
                    )
                    })} 
                    </div>
              <button  onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 500, 20);
          }} name="right" >Right</button>
        </div>
    </div>
}

export default Meet;