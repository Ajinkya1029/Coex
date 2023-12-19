// import styles from "../components/service.module.css";
// import UserData from "../components/userData";
import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import styles from "../components/service.module.css"
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
      <div>
<NavBar></NavBar>
      <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Mine sender</th>
            <th>Sender Name</th>
            <th>Cluster Id</th>
            <th>Cluster Name</th>
            <th>Priority</th>
            <th>Expected In</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Use parentheses instead of curly braces for the map function */}
          {users.map((user, index) => (
            <tr key={index}>
               <td>{user.mineSender}</td>
              <td>{user.senderName}</td>
            <td>{user.clusterId}</td> 
            <td>{user.clusterName}</td>
              <td>{user.priority}</td> {/* Assuming Priority is a property of the user object */}
              <td>{user.expectedIn}</td> {/* Assuming ExpectedIn is a property of the user object */}
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
      );
    };
export default ServiceTable;
// mine id mine name 