import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../components/mining.module.css'; // Import the CSS file for styling
import NavBar from '../components/navbar';
import BarGraph from '../components/bargraph';
import { useLocation } from 'react-router';




function MiningCard(){
    const search = window.location.href;
    const id = search.split("?id=")[1];
    var url="https://localhost:7278/api/Sidings/GetById?id="+id;
    const [data,setData]=useState([]);
useEffect(()=>{
    fetchUser(url);
  },[]);

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
      setData(data);
      console.log(data);
      
    })
  }
    return <div>
        <NavBar></NavBar>
        <div className={style.container}>

     <div className={style.miningcard}>
       <h2>{data.sidingName}</h2>
       <p>Zone: {data.zone}</p>
       <p>Station: {data.station}</p>
       <p>Division: {data.division}</p>
       <p>State: {data.state}</p>
       <p>No. of Mines: {data.numberOfMines}</p>
     </div>
     <BarGraph />
   </div>
    </div>
}

export default MiningCard;