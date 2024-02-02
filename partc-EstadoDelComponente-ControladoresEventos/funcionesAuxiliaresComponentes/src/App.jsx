import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Miguel Eduardo Guerrero Ibarra'
  const age = 38

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age} />
      <Hello name = "Ibarra Guerrero Eduardo Miguel" age = {83} />
    </div>
  )
}

export default App
