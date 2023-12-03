import React from "react";
import NavBar from "./navbar";
import Work from "./work";
import Meet from "./meet";
import Contact from "./contact";
import bgimg from "../resources/backgroundimage.png";
function Body(){
return <div >
    <img src={bgimg} className="bgimg" ></img>
<NavBar ></NavBar>
<Work></Work>
<Meet></Meet>
<Contact></Contact>
</div> 


}
export default Body;