import styles from "../components/service.module.css";
import UserData from "../components/userData";
import React, { useEffect, useState } from "react";
const API = "http://localhost:1000/service";


const ServiceTable = () => {
    const [users,setUsers] = useState([]);


    function fetchUser(url){
      fetch(url,{
        method:"GET",
        crossDomain:true, 
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-origin":"*",
      },
      }).then((res)=>res.json()).then((data)=>{
        setUsers(data);
        console.log(data);
      })
    }

    useEffect(() => {
        fetchUser(API);
    },[])

    return (
      <div className="container">
      <table>
        <thead>
          <tr>
            <th>Requester mine</th>
            <th>cluster name</th>
            <th>Distance</th>
            <th>Priority</th>
            <th>expected in</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Use parentheses instead of curly braces for the map function */}
          {users.map((user, index) => (
            <tr key={index}>
              {/* <td>{user.RequesterMine}</td>
              <td>{user.ClusterName}</td>
              <td>{user.Distance}</td> Assuming Distance is a property of the user object */}
              <td>{user.alt}</td> {/* Assuming Priority is a property of the user object */}
              <td>{user.name}</td> {/* Assuming ExpectedIn is a property of the user object */}
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      );
    };
export default ServiceTable;
// mine id mine name 