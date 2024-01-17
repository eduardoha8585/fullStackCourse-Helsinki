import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const x = 1
  let y = 5

  console.log(x, y)   // se imprime 1, 5
  y += 10
  console.log(x, y)   // se imprime 1, 15
  y = 'sometext'
  console.log(x, y)   // se imprime 1, sometext
  //x = 4 
  return (
    <>
      revisar valor variables en consola
    </>
  )  
}

export default App
