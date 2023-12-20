// src/components/RequestHandler.js
import React, { useEffect, useState } from 'react';
import style from './app.module.css'
const RequestHandler = ({ amount, coalAmount, dateTime }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (amount) {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual URL of your backend server
      const backendEndpoint = 'YOUR_BACKEND_ENDPOINT';

      setLoading(true);

      // Simulate sending a request to the backend
      fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, coalAmount, dateTime }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  }, [amount]);

  return (
    <div className={style.RequestHandler}>
      <h2>Request Details</h2>
      <p>Amount of Rakes: {amount}</p>
      <p>Amount of Coal (in tons): {coalAmount}</p>
      <p>Date and Time: {dateTime}</p>
      {loading && <p>Sending request...</p>}
      {response && (
        <>
          <h3>Response from Train Department:</h3>
          <p>{response.message}</p>
        </>
      )}
    </div>
  );
};

export default RequestHandler;