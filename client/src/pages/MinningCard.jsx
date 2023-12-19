// MiningCard.js

import React from 'react';
import style from './MinningCard.module.css'; // Import the CSS file for styling
import NavBar from '../components/navbar';
import BarGraph from './graph';
const MiningCard = ({ sidingName, zone, station, division, state, numberOfMines }) => {
  return (
    <>
    <NavBar/>
    <div className={style.miningcard}>
      <h2>{sidingName}</h2>
      <p>Zone: {zone}</p>
      <p>Station: {station}</p>
      <p>Division: {division}</p>
      <p>State: {state}</p>
      <p>No. of Mines: {numberOfMines}</p>
    </div>
    <BarGraph/>
    </>
  );
};

export default MiningCard;
