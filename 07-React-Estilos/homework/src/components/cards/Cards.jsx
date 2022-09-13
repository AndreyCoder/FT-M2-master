import React from 'react';
import s from './Cards.module.css'
import Card from '../card/Card.jsx'
import gif from '../../media/Eclipse.gif'

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={s.cards}>
      {
        cities ? cities.map((e, index) => (
          <Card
            key={index}
            name={e.name}
            max={e.main.temp_max}
            min={e.main.temp_min}
            img={e.weather[0].icon}
            onClose={() => alert(e.city)}
          />
        )) :
          <div> <img src={gif} alt='loading' /> </div>
      }
    </div>
  )
};

