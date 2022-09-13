import React from 'react'
import Familiares from './Familiares.jsx'

const Familia = ({ familia }) => {
  return (
    <>
      {
        familia.map(el => (
          <Familiares
            nombre={el.nombre}
            apellido={el.apellido}
            edad={el.edad}
            key={el.id}
          />
        ))
      }
    </>
  )
}

export default Familia