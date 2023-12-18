
import React from "react";
import style from './style.module.css';

function Card({ id, src, alt, name, position, coursename,year }) {
  return (
    <div className={style.card}>
      <img className={style.image} src={src} alt={alt} key={id} />
      <div className={style.cardContent}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.position}>{position}</p>
        <p className={style.coursename}>{coursename}</p>
        <p className={style.year}>{year}</p>
      </div>
    </div>
  );
}

export default Card;
