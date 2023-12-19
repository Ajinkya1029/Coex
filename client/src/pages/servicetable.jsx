import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import styles from "../components/service.module.css"
const API = "http://localhost:1000/services";


const ServiceTable = () => {
  const [users, setUsers] = useState([]);


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

  useEffect(() => {
    fetchUser(API);
  }, [])

  function submit(event, userId) {
    event.preventDefault();
    fetch("http://localhost:1000/service", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
      },
      body: JSON.stringify({
        reqid: "3",
        
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      })
    })
  }

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

                <button name="asf" onClick={(event) => submit(event, user.id)}>Action</button>
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
