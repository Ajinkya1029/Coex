import React from "react";
import logo from '../resources/contact-logo.png';
import style from './style.module.css'

function Contact(){
    return <div className={style.contact}>
<div className={style.leftcon}>
<img src={logo}></img>
</div>
<div className={style.rightcon}>
    <h4>Services</h4>
    <h4>Support</h4>
    <h4>Contact Us</h4>
   
</div>
    </div>
}
export default Contact;