import React from "react";
import NavBar from "./navbar";
import Work from "./work";
import Meet from "./meet";
import Contact from "./contact";
import bgimg from "../resources/train.jpeg.jpg";
import style from './style.module.css';
import carodata from "./carodata";
import emblem from "../resources/Ministry.png";

function Body() {
    return <div >
        <img src={bgimg} className={style.bgimg} ></img>
        <NavBar ></NavBar>
        <div>
            <div className={style.box}></div>
            <img src={emblem} className={style.ministryimg} ></img>
            <h1 className={style.text}>MINISTRY OF COAL</h1>
            <p className={style.paragraph}>Forecasting and scheduling of railway rakes.</p>
            <p className={style.box1}> COeX is a cutting-edge application designed to streamline the forecasting and scheduling process of railway rakes for coal extraction and delivery.
The system facilitates seamless communication between coal mine operatives and siding operators through a user-friendly interface.
The platform's design anticipates broader applications beyond its initial focus on coal, fostering a general-purpose website for diverse operational needs.
In essence, COeX emerges as a robust and adaptable application, revolutionizing the coordination between coal mine operatives and siding operators while laying the groundwork for future collaborative possibilities across different industries.
</p>
        </div>

        <Work></Work>
        <Meet data={carodata}></Meet>
        <Contact></Contact>
    </div>


}
export default Body;