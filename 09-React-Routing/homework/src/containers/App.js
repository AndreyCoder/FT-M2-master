import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import City from '../components/City.jsx'
import NotFound from '../components/NotFound';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima

    for (let city of cities) {
      if (city.name.toLowerCase() === ciudad.toLowerCase()) {
        alert('La ciudad buscada ya esta en la lista')
        return
      }
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
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
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Nav onSearch={onSearch} />}>
          <Route index element={<Cards cities={cities} onClose={onClose} />} />
          <Route path='about' element={<About />} />
          <Route path='/ciudad/:ciudadId' element={<City onFilter={onFilter} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
