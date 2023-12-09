import React,{useState} from "react";
import carodata from "./carodata.jsx";
import style from './style.module.css'
   
function Card(item){
    return <div>
        <img src={item.src} alt={item.alt} key={item.id}/> 
    </div>
}

function Meet(){
    
    const [slide,setSlide]=useState(0);
    function caroHandler(event){
        if(event.target.name==="left"){
            if(slide>0){

                setSlide(slide -1);
            }else{
                setSlide(3);
            }
        }else if(event.target.name==="right"){
            if(slide<3){

                setSlide(slide +1);
            }else{
                setSlide(0);
            }
            
        }
    }
   
    return <div className={style.meet}>
   <h1>Meet Our Team</h1>
  <div className={style.carousel}> 
    <button onClick={caroHandler} name="left">Left</button>
 {carodata.map((item,idx)=>{
    if(idx===slide){

        return (<div >

           <Card id={idx} src={item.src} alt={item.alt}></Card> 
            </div>
            )
        }else{
            return (
                <div className={style.caroimg}>
           <Card id={idx} src={item.src} alt={item.alt}></Card> 
                </div>
                )
        }
 })}
     
    
    
 <button onClick={caroHandler} name="right">Right</button>
  </div>
    </div>
}

export default Meet;