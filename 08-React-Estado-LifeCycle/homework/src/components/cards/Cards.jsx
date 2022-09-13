import React from 'react';
import s from './Cards.module.css'
import Card from '../card/Card.jsx'
import gif from '../../media/Eclipse.gif'

export default function Cards({ cities, onClose }) {

  if (cities) {
    return (
      <div className={s.cards}>
        {cities.map(e =>
          <Card
            key={e.id}
            name={e.name}
            max={e.max}
            min={e.min}
            img={e.img}
            onClose={() => onClose(e.id)}
            id={e.id}
          />
        )}
      </div>
    )
  } else {
    return (
      < div > <img src={gif} alt='loading' /> </div >
    )
  }
};

