import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App'

const Hello = (props) => {
  //funcion auxiliar definida dentro de otra función que define el comportamiento de nuestro componente
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
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
