import React from "react";
import NavBar from "./navbar";
import Work from "./work";
import Meet from "./meet";
import Contact from "./contact";
import bgimg from "../resources/train.jpeg.jpg";
import style from './style.module.css';
import carodata from "./carodata";
import emblem from "../resources/Ministry.png";
import MinningCard from "../pages/MinningCard"
function Body() {
    return <div >
        <img src={bgimg} className={style.bgimg} ></img>
        <NavBar ></NavBar>
        <div>
            <div className={style.box}></div>
            <img src={emblem} className={style.ministryimg} ></img>
            <h1 className={style.text}>MINISTRY OF COAL</h1>
            <p className={style.paragraph}>Forecasting and scheduling of railway rakes.</p>
        </div>

        <Work></Work>
        <Meet data={carodata}></Meet>
        <Contact></Contact>
    </div>


}
export default Body;