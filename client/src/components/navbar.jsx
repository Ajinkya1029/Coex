import { Link } from 'react-router-dom';
import React from "react";
import CoexLogo from '../resources/coex-logo (1).png';
import style from './style.module.css'
 
function NavBar(){
    
    return <div className={style.navbar}>
        <div className={style.leftnav}>
        <img  id="coexlogo"src={CoexLogo} alt="Logo"/>
        </div>
        <div className={style.rightnav}>

    <Link to="/services" className={style.nt}>Services</Link>
    <Link to="/support" className={style.nt}>Support</Link>
    <Link to="/login" className={style.nt}>Login</Link>

        </div>
    </div>
    }

export default NavBar;