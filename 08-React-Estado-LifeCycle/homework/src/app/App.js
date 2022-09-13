import React, { useState } from 'react';
import Nav from '../components/navBar/Nav';
import Cards from '../components/cards/Cards.jsx'
import s from './App.module.css'

function App() {

  const [cities, setCities] = useState([])

  const apiKey = 'b335a17a43a839a733450cf5fab3c851'

  function onSearch(city) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(recurso => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }
          setCities(oldCities => [...oldCities, city])
        } else {
          alert('Ciudad no encontrada')
        }
      })
      .catch(error => console.log(error))
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(el => el.id !== id))
  }

  return (
    <div className={s.app}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <div className={s.main}>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default App;
