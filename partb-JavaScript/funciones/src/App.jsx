import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App'

const App = () => {

  //definicion 1 - Funcion
  const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

  //definicion 2 - Funcion
  const square = p => {
    console.log(p)
  }

  //definicion 3 - Fucion
  const square2 = p => p * p

  const result = sum(1, 5)
  console.log(result)
  square(10)
  console.log(square2(10))
  
  return <>resultado {result}</>

  
}

export default App
