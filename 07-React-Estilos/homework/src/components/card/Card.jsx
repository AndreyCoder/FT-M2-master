import React from 'react';
import s from './Card.module.css'
import { FiXCircle } from "react-icons/fi"

export default function Card(props) {

  return (
    <div className={s.card}>
      <h1 className={s.title}>{props.name}</h1>

      <div className={s.main}>
        <button
          onClick={props.onClose}
          className={s.btn}>
          <FiXCircle
            className={s.svg}
          />
        </button>

        <div>
          <h3>MAX</h3>
          <p>{props.max}°</p>
        </div>

        <div>
          <h3>MIN</h3>
          <p>{props.min}°</p>
        </div>

        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt={`Clima de la ciudad ${props.name}`}
        />
      </div>
    </div>
  )
};

