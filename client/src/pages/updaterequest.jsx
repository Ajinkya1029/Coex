import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router';
import RequestForm from '../components/requestform';
// import RequestHandler from './requesthandler';
import style from '../components/app.module.css'
import styles from '../components/app.module.css';
import NavBar from '../components/navbar';
function UpdateReq() {
    const navigate = useNavigate();
    const [FreightAmount, setAmount] = useState('');
    const [RakesRequired, setCoalAmount] = useState('');
    const [RequiredOn, setDateTime] = useState('');
    const [Remarks, setRemark] = useState('');
    const [dat,setDat]=useState([]);
    const [Reason,setReason]=useState("");
    async function handleSubmit(event) { 
        event.preventDefault();
        // const search = window.location.href;
        // const id = search.split("?id=")[1];
        // var url="https://localhost:7278/api/Requests/GetById?id="+id;
    
        const token = localStorage.getItem('token');
    
          console.log({ FreightAmount, RakesRequired, RequiredOn,Remarks });
         fetch('https://localhost:7278/api/Requests', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `${token}`,
          },body: JSON.stringify({ FreightAmount, RakesRequired, RequiredOn, Remarks }),
          
         })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            
             navigate("/")
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });
        }
        function fetchdata(){
            const token = localStorage.getItem('token');
            const search = window.location.href;
        const id = search.split("?id=")[1];
        var url="https://localhost:7278/api/Requests/GetById?id="+id;
            fetch(url,{
                method:"GET",
                crossDomain:true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-origin": "*",
                    Authorization: `${token}`,
                  },
            }).then((res)=>res.json()).then((data)=>{
                setDat(data);
                
                console.log(data);
            })
        }
        useEffect(() => {
            fetchdata();
          }, []);
  return (
    <div>
<NavBar></NavBar>


    <div className={styles.App}>
      <h1 className={styles.h1}> Update Request</h1>
      <div className={styles.body1}>
      <form className={styles.form1} onSubmit={handleSubmit}>
        <label>
          Number of Rakes:
          <input
          value={FreightAmount}
            type="number"
            
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Coal Stock (in tons):
          <input
            className={style.form1}
            type="number"
            value={RakesRequired}
            onChange={(e) => setCoalAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Requested Date and Time:
          <input
            className={style.form1}
            type="datetime-local"
            value={RequiredOn}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <label>
          Remark:
          <input
            className={style.form1}
            type="text"
            value={Remarks}
            onChange={(e) => setRemark(e.target.value)}
            required
          />
        </label>
        <label>
          Reason:
          <input
            className={style.form1}
            type="text"
            value={Reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
      

    </div>
  </div>
  );
}
export default UpdateReq;

