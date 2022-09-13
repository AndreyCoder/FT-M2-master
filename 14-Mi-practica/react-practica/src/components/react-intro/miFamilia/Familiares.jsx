import React from 'react'

const Familiares = ({ nombre, apellido, edad }) => {
  return (
    <>
      <h3>
        Nombre: {nombre}
        <br />
        Apellido: {apellido}
        <br />
        Edad: {edad}
      </h3>
      <hr />
    </>
  )
}

export default Familiares

