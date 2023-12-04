import React from "react";
import styles from "../components/login.module.css"
function Login(){
    return  <div className={styles.Body}>
    <div className={styles.wrapper} >
    <form action="">
        <h1>Login</h1>
        <div className={styles.inputbox}>
            <input type="text" placeholder="Manager ID" required/>
            <i className="'bx bxsuser'"></i>
        </div>
        <div className={styles.inputbox}>
            <input type="password" placeholder="Password" required/>
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