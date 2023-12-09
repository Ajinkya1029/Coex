import React from "react";
import NavBar from "./navbar";
import Work from "./work";
import Meet from "./meet";
import Contact from "./contact";
import bgimg from "../resources/backgroundimage.png";
import style from './style.module.css'
import carodata from "./carodata";

function Body(){
return <div >
    <img src={bgimg} className={style.bgimg} ></img>
<NavBar ></NavBar>
<Work></Work>
<Meet data={carodata}></Meet>
<Contact></Contact>
</div> 


}
export default Body;