import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';


const Timer = () => {

  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)
  const [tipo, setTipo] = useState('contador')
  let myRef = useRef(null)

  useEffect(() => {
    let intervalo = null

    if (activo && tipo === 'contador') {
      intervalo = setInterval(() => {
        setSegundos(prevState => prevState + 1)
      }, 1000)
    }

    if (activo && tipo === 'cuenta regresiva') {
      intervalo = setInterval(() => {
        setSegundos(prevState => prevState - 1)
      }, 1000)
    }

    if (!activo && segundos !== 0 && tipo === 'contador') {
      clearInterval(intervalo)
    }

    if (segundos === 0 && tipo === 'cuenta regresiva') {
      reset()
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo)
  }, [activo, tipo, segundos])

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo() {
    if (tipo === 'contador') setTipo('cuenta regresiva')
    if (tipo === 'cuenta regresiva') setTipo('contador')
  }

  function agregarSegundos() {
    let value = myRef.current.value
    setSegundos(value)
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>

      <div className="row">
        <button
          onClick={toggle}
          className="button button-primary">
          {activo ? 'Pausa' : 'Inicio'}
        </button>

        <button
          onClick={reset}
          className="button button-primary">
          Reset
        </button>
      </div>

      <button
        onClick={cambioTipo}
        className="button button-primary">
        {tipo}
      </button>

      {
        tipo === 'cuenta regresiva' &&
        <input
          onChange={agregarSegundos}
          ref={myRef}
          type="number"
          placeholder="Ingresa Segundos"
          autoComplete="off"
        />
      }

    </div>
  );
};

export default Timer;
