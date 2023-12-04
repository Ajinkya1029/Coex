import React from "react";
import style from './style.module.css'

import htw from "../resources/htw.png"
function Work(){
    return <div className={style.work}>
        <h1>
    How Things Work
        </h1>
<img src={htw}></img>
    </div>
}
export default Work;