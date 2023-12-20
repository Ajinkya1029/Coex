import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "../components/getrequest.module.css";
const url = "https://localhost:7278/api/Requests/GetAll";

function GetRequests() {
  const [users, setUsers] = useState([]);
//   const [data, setData] = useState([]);
  const [ur, setUrl] = useState("");
  const navigate = useNavigate();

  function fetchData(url) {
    const token = localStorage.getItem('token');
    fetch(url, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
        Authorization: `${token}`,
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
    navigate("/miningcard?id=" + String(id));
  }

  return (
    <div className={styles.map}>
      <h2>Request Page</h2>
      <table className={styles.sidingdata}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Siding ID</th>
            <th>Coal Stock</th>
            <th>Rakes Required</th>
            <th>Requested Date</th>
            <th>Delivery Date</th>
            <th>User ID</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <tr onClick={(event) => test(event, item.id)} key={idx}>
              <td>{idx}</td>
              <td>{item.sidingId}</td>
              <td>{item.frieghtAmount}</td>
              <td>{item.rakesRequired}</td>
              <td>{item.requiredOn}</td>
              <td>{item.placedOn}</td>
              <td>{item.insertedBy}</td>
              <td>{item.status}</td>
              <td>{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );}

export default GetRequests;