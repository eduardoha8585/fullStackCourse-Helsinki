import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App'

//Componente normal sin desestructuración
const Hello = (props) =>{

  const bornyear = () =>{
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>
        So your were probably born in {bornyear()}
      </p>
    </div>
  )
}

//Componente con asignación de props a variables
const Hello2 = (props) => {
  const name = props.name
  const age = props.age

  const bornyear = () =>{
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return(
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So your were probably born in {bornyear()}
      </p>
    </div>
  )
}

//Componente con desestructuración en parametro de entrada
const Hello3 = ({name, age}) => {
  const bornyear = () =>{
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return(
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So your were probably born in {bornyear()}
      </p>
    </div>
  )
}

//Componente con asignacion por desestructuración
const Hello4 = (props) => {
  
  const {name, age} = props

  const bornyear = () =>{
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return(
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So your were probably born in {bornyear()}
      </p>
    </div>
  )

}

const App = () => {

  const name = "Hector Augusto Guerrero Ortiz"
  const age = 65

  return (
    <>
      <Hello name = "Miguel Eduardo Guerrero Ibarra" age = {38}/>
      <Hello2 name = "Amparo de Jesús Ibarra Izquiero" age = {66}/>
      <Hello3 name = {name} age = {age}/>
      <Hello4 name = "Isabella Guerrero Riascos" age = {14}/>
    </>
  )
}

export default App
