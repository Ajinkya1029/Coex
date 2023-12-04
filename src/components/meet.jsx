import React from "react";
import Mot from '../resources/mot.png';
import style from './style.module.css'

function Meet(){
    return <div className={style.meet}>
<h1>Meet Our Team</h1>
<img src={Mot}></img>
    </div>
}
export default Meet;