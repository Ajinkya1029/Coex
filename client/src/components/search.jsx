import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
function Search(){
    const [name,setName]=useState("");
    
    
    return <div className={styles.search}>
<form className={styles.searchbox} >
    <input name="search" placeholder="search" onChange={(e)=>setName(e.target.value)}></input>
    <button type="submit" >Submit</button>
</form>
    </div>
}
export default Search;