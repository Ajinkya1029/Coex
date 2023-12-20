import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../components/login.module.css";

function SignUp() {
  const [userName, setId] = useState("");
  const [password, setPassword] = useState("");
  const [sidingId, setCluster] = useState("");
  // const [passcode, setPasscode] = useState("");
  const navigate = useNavigate();



 function submit(event){
    event.preventDefault();
    fetch('https://localhost:7278/api/Users/loginSiding', {
        method: 'POST',
        body: JSON.stringify({sidingId,userName, password}),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>res.json()).then((data)=>{
      console.log(data)
      
        
    })}
 
  return (
    <div className={styles.Body}>
      <div className={styles.wrapper}>
        <form onSubmit={submit}>
          <h1>Sign-Up</h1>
          <div className={styles.inputbox}>
            <input onChange={(e) => setCluster(e.target.value)} type="text" placeholder="Cluster Id" required />
            <i className="bx bxsuser"></i>
          </div>
          {/* <div className={styles.inputbox}>
            <input onChange={(e) => setPasscode(e.target.value)} type="text" placeholder="Passcode" required />
            <i className="bx bxsuser"></i>
          </div> */}
          <div className={styles.inputbox}>
            <input onChange={(e) => setId(e.target.value)} type="text" placeholder="Manager ID" required />
            <i className="bx bxsuser"></i>
          </div>
          <div className={styles.inputbox}>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <i className={styles.bxbxslockalt}></i>
          </div>
          <div className={styles.rememberforgot}>
           </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
          <div className={styles.registerlink}>
           
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;