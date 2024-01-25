import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {

  const object1 = {
    name: 'Miguel Eduardo Guerrero Ibarra',
    age: 38,
    educacion: 'Magister',
  }

  const object2 = {
    name: {
      first: 'Amparo de Jesus',
      last: 'Ibarra Izquierdo',
    },
    hijos: [1, 2, 3],
    parent: 'Madre',

  }

  console.log('Objeto 1', object1)
  console.log('Objeto 2', object2)
  console.log('Nombre completo', object2.name.first + ' '+ object2.name.last)

  return (
    <>
      Revisar la consola del navegador ctrl+shift+i
    </>
  )
}

export default App
