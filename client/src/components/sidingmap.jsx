// SidingMap.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "../components/allsiding.module.css";
import MiningCard from "../pages/miningcard";
const url = "https://localhost:7278/api/Sidings/GetAll";

function SidingMap() {
  const [users, setUsers] = useState([]);
  const [data,setData]=useState([]);
  const [ur,setUrl]=useState("");
  // const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  function fetchData(url) {
    fetch(url, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchData(url);
    
  }, []);

  function test(event, id) {
    const encodedValue = `api/Sidings/GetById?id=${encodeURIComponent(id)}`;
    setUrl(encodedValue);
    navigate("/miningcard?id="+String(id));
  }


  return (
    <div className={styles.map}>
      <h2>Siding Page</h2>
      <table className={styles.sidingdata}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Division</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <div onClick={(event) => test(event, item.id)} key={idx}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.division}</td>
                <td>{item.state}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default SidingMap;
