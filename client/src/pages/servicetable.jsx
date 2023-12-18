import styles from "../components/service.module.css";
import UserData from "../components/userData";
import React, { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";


const ServiceTable = () => {
    const [users,setUsers] = useState([]);

    const fetchUser = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.length > 0){
                setUsers(data);
            }
            console.log(data);

        } catch (e) {
            console.error(e);
        }
    } 

    useEffect(() => {
        fetchUser(API);
    },[])

    return (
        <div className={styles.card}>
          <table className={styles.serviceTable}>
            <thead>
              <tr>
                <th>Mine_ID</th>
                <th>Mine_Name</th>
                <th>Cluster_ID</th>
                <th>Cluster_Name</th>
                <th>Distance</th>
                <th>Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <UserData users={users} />
            </tbody>
          </table>
        </div>
      );
    };
export default ServiceTable;