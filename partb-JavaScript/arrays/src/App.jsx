import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const t = [1, -1, 3]

  const t2 = t.concat(5)

  console.log("Elementos array t", t)
  console.log("Elementos array t2", t2)

  //t.push(5)

  console.log("Longitud t", t.length) // se imprime 4
  console.log("longitud t2", t2.length)
  //console.log(t[1])     // se imprime -1

  t.forEach(value => {
    console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
  })                

  return (
    <>
      
    </>
  )
}

export default App
