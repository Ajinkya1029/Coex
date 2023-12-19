import React from "react";
import { useState } from "react";
import data from "../components/allsidingdata";
import styles from "../components/allsiding.module.css";
function SidingMap(){
    const [user,setUsers]=useState("");
    function fetchUser(url) {
        fetch(url, {
          method: "GET",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-origin": "*",
          },
        }).then((res) => res.json()).then((data) => {
          setUsers(data);
          console.log(data);
        })
      }
    return <div className={styles.map}>
        {data.map((item,idx)=>{
    return<div className={styles.sidingdata}>
    
    <h4>Id: {item.id}</h4>
    <h4>Name: {item.name}</h4>
    <h4>State: {item.state}</h4>
    </div>
    
})}
    </div>
}
export default SidingMap;