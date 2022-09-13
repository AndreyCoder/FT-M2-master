import { useState } from "react"

const State = (props) => {

  const [contador, setContador] = useState(props.contador)
  // let varContador = 100

  let incrementarValue = () => {
    setContador(contador + 1)
    setContador(contador + 1)
  }

  const incrementarFunction = () => {
    setContador((prevState) => prevState + 1)
    setContador((prevState) => prevState + 1)
  }
  return (
    <div>
      <h1>useState function update vs value update</h1>
      <div>
        <button onClick={incrementarFunction}>Suma dos!</button>
      </div>
      <div>
        <button onClick={incrementarValue}>Suma dos?</button>
      </div>
      &nbsp;Hola, soy el state {contador}!!
    </div>
  )
}

export default State

