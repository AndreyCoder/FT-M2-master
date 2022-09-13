import React, { useState } from 'react';
import validate from './validate.js'

export default function Form() {

  const initialState = {
    username: '',
    password: ''
  }

  const [input, setInput] = useState(initialState)
  const [error, setError] = useState({})

  const handleOnchage = (e) => {
    setInput(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnBlur = (e) => {
    const objErrors = validate(input)
    setError(objErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(input))
    setInput(initialState)
    console.log(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <h2>Log in</h2>

        <div>
          <label>Username</label>
          <br />
          <input
            type='text'
            value={input.username}
            name='username'
            placeholder='Ej: ejemplo@ejemplo.com'
            onChange={handleOnchage}
            onBlur={handleOnBlur}
            className={error.username && 'danger'}
          />
        </div>
        {error.username && (<p className='danger'>{error.username}</p>)}

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleOnchage}
            onBlur={handleOnBlur}
            className={error.username && 'danger'}
          />
        </div>
        {error.password && (<p className='danger'>{error.password}</p>)}

        <br />

        <button
          disabled={!input.username || Object.keys(error).length > 0}
          type='submit'>
          Log in
        </button>
      </form>
    </div>
  )
}
