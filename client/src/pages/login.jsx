import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../components/login.module.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [clusterid, setCluster] = useState("");
  const [passcode, setPasscode] = useState("");
  const navigate = useNavigate();



 function submit(event){
    event.preventDefault();
    fetch('https://localhost:7158/api/Users/loginCluster', {
        method: 'POST',
        body: JSON.stringify({clusterid,passcode,id, password}),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>res.json()).then((data)=>{
        // const token = data.token;

        
        // localStorage.setItem('token', token);

        console.log(data);

       
        
    }).then(()=>{
        navigate("/");
    })}
 
  return (
    <div className={styles.Body}>
      <div className={styles.wrapper}>
        <form onSubmit={submit}>
          <h1>Login</h1>
          <div className={styles.inputbox}>
            <input onChange={(e) => setCluster(e.target.value)} type="text" placeholder="Cluster Id" required />
            <i className="bx bxsuser"></i>
          </div>
          <div className={styles.inputbox}>
            <input onChange={(e) => setPasscode(e.target.value)} type="text" placeholder="Passcode" required />
            <i className="bx bxsuser"></i>
          </div>
          <div className={styles.inputbox}>
            <input onChange={(e) => setId(e.target.value)} type="text" placeholder="Manager ID" required />
            <i className="bx bxsuser"></i>
          </div>
          <div className={styles.inputbox}>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <i className={styles.bxbxslockalt}></i>
          </div>
          <div className={styles.rememberforgot}>
            <label>
              <input type="checkbox" />Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className={styles.registerlink}>
            <p>
              Don't have an account <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
