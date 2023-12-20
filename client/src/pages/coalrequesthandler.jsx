import React, { useEffect, useState } from 'react';
const url="https://localhost:7278/api/Sidings/UpdateInventory";

    const CoalRequestHandler = ({ amount, coalAmount, dateTime }) => {
      const [response, setResponse] = useState(null);
      const [loading, setLoading] = useState(false);
      const [inventory,setStat]=useState("");
    
   
      function submit(event){
        event.preventDefault();
        const token = localStorage.getItem('token');
        fetch(url,{
          method:"PUT",
          crossDomain:true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `${token}`,
          },body:JSON.stringify({inventory})
        }).then((res)=>res.json()).then((data)=>{
          console.log(data);
        })
      }
    
      return (
        <div className="RequestHandler">
         
          <p>Amount of Coal (in tons): {coalAmount}</p>
         <input type="text" onChange={(e)=>setStat(e.target.value)}></input>
         <button type='submit' onClick={submit}>Update</button>
          
          
        </div>
      );
    };
    
    export default CoalRequestHandler;

