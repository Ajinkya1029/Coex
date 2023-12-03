import React from "react";
import logo from './resources/contact-logo.png';
function Contact(){
    return <div className="contact">
<div className="left-con">
<img src={logo}></img>
</div>
<div className="right-con">
    <h4>Services</h4>
    <h4>Support</h4>
    <h4>Contact Us</h4>
   
</div>
    </div>
}
export default Contact;