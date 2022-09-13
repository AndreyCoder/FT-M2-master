import React from 'react'
import { useParams } from 'react-router-dom'

const City = ({ onFilter }) => {

  const params = useParams()
  var city = onFilter(params.ciudadId)

  return (
    <div>
      {
        city ?
          <div>

            <h2>{city.name}</h2>

            <div>
              <p>Latitud {city.latitud}</p>
              <p>Longitud {city.longitud}</p>
            </div>

            <div>
              <p>Max {city.max}</p>
              <p>Min {city.min}</p>
            </div>

            <div>
              <p>Temp {city.temp}</p>
              <p>Weather {city.weather}</p>
              <p>wind {city.wind}</p>
            </div>

          </div>
          : <div><p>No hay Imformacion</p></div>
      }
    </div>
  )
}

export default City

