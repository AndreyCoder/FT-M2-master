import React from 'react'

const Saludo = (props) => {
  const saludo = props.lang === 'es' ? 'Hola' : 'Hello'
  return (
    <>
      <h3>{saludo}! {props.nombre}</h3>
    </>
  )
}

export default Saludo

