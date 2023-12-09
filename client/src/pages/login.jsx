import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../components/login.module.css"
function Login(){
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");

    function submit(event){
event.preventDefault();
// axios.post('http://localhost:1000/login',{id,password}).then(result=>console.log(result)).catch(err=>console.log(err));
fetch("http://localhost:1000/login",{
   method:"POST",
crossDomain:true,
headers:{
    "Content-Type":"application/json",
    Accept:"application/json",
    "Access-Control-Allow-origin":"*",
},
body:JSON.stringify({
    id,
    password,
})
}).then((res)=>res.json()).then((data)=>{
    console.log(data,"UserRegistered");
});
    }
    
    return  <div className={styles.Body}>
    <div className={styles.wrapper} >
    <form onSubmit={submit}>
        <h1>Login</h1>
        <div className={styles.inputbox}>
            <input onChange={(e)=>setId(e.target.value)} type="text" placeholder="Manager ID" required/>
            <i className="'bx bxsuser'"></i>
        </div>
        <div className={styles.inputbox}>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
            <i className={styles.bxbxslockalt}></i>
        </div>
        <div className={styles.rememberforgot}>
            <label><input type="checkbox"/>Remember me</label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit" class="btn">Login</button>
        <div className={styles.registerlink}>
            <p>Don't have an account <a href="#">Register</a></p>
        </div>
    </form>
   </div>
   </div>
}

export default Login;