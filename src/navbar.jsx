import React from "react";
import CoexLogo from './resources/coex-logo (1).png';
 
function NavBar(){
    
    return <div className="navbar">
        <div className="left-nav">
        <img  id="coexlogo"src={CoexLogo} alt="Logo"/>
        </div>
        <div className="right-nav">

    <h4>Services</h4>
    <h4>Support</h4>
    <h4>Login</h4>
    <h4>or</h4>
    <h4>SignUp</h4>

        </div>
    </div>
    }

export default NavBar;