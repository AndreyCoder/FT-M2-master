import React from 'react';
import Card from './Card';
import Eclipse from './media/Eclipse.gif'

// ===== COMPONENTE FUNCIONAL ===== \\

export default function Cards({ cities }) {
  // console.log('Cities', cities)

  return (
    <>
      {
        cities ?
          cities.map(el => (
            <Card
              key={el.id}
              name={el.name}
              max={el.main.temp_max}
              min={el.main.temp_min}
              img={el.weather[0].icon}
              onClose={() => alert(el.name)}
            />
          )) :
          <img src={Eclipse} alt='loading' />
      }
    </>
  )
};

// =============================== \\

// ===== COMPONENTE DE CLASE ===== \\

/*
class Cards extends React.Component {
  render() {
    return (
    <>
      {
        this.props.cities.map(el => (
          <Card
            key={el.id}
            name={el.name}
            max={el.main.temp_max}
            min={el.main.temp_min}
            img={el.weather[0].icon}
            onClose={() => alert(el.name)}
          />
        ))
      }
    </>
  )
  }
}

export defauld Cards
*/

// =============================== \\