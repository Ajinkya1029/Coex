import React, { useState } from 'react';
import style from './app.module.css';

function RequestForm() {
  const [FreightAmount, setAmount] = useState('');
  const [RakesRequired, setCoalAmount] = useState('');
  const [RequiredOn, setDateTime] = useState('');
  const [Remarks, setRemark] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');

    console.log({ FreightAmount, RakesRequired, RequiredOn,Remarks });
    fetch('https://localhost:7278/api/Requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ FreightAmount, RakesRequired, RequiredOn, Remarks }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }

  return (
    <div className={style.body1}>
      <form className={style.form1} onSubmit={handleSubmit}>
        <label>
          Number of Rakes:
          <input
            type="number"
            value={FreightAmount}
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

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RequestForm;
