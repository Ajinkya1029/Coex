// src/components/RequestForm.js
import React, { useState } from 'react';
import style from './app.module.css';

const RequestForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [coalAmount, setCoalAmount] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass an object containing all the form values to the onSubmit callback
    onSubmit({ amount, coalAmount, dateTime });
  };

  return (
    <div className={style.body1}>

    <form className={style.form1}onSubmit={handleSubmit}>
      <label>
        Number of Rakes:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          />
      </label>

      <label>
        Coal Stock (in tons):
        <input className={style.form1}
          type="number"
          value={coalAmount}
          onChange={(e) => setCoalAmount(e.target.value)}
          required
          />
      </label>

      <label>
       Requested Date and Time:
        <input className={style.form1}
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
          />
      </label>
      <label>
        Remark:
        <input className={style.form1}
          type='text'
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          required
          />
      </label>

      <button type="submit">Submit Request</button>
    </form>
          </div>
  );
};

export default RequestForm;