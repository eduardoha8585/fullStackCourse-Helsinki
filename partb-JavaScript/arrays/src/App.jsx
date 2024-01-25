import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const t = [1, -1, 3]

  /*Utilizando concat para no modificar el objeto(Array) original (t), debido a que react usa tecnicas
  de programacion funcional y una caracteristica de la programacion funcional es la inmutabilidad de las
  estructuras de datos*/
  const t2 = t.concat(5)

  //Transformando el objeto(array original t) en algo diferente con map
  const m1 = t.map(value => value * 2)
  const m2 = t.map(value => '<li>' + value + '<li>')

  /*Desestructuracion del objeto original(Array t), asignacion de cada elemento a una variable en este caso
  primer valor a first, segundo valor a second y los restantes a un array propio llamado rest*/
  const [first, second, ...rest] = t

  console.log("Elemento m2", m2)

  console.log("Elementos t", t)
  console.log("Elementos t2", t2)
  console.log("Elementos m1", m1)

  //t.push(5)

  console.log("Longitud t", t.length)
  console.log("Longitud t2", t2.length)
  console.log("Longitud m1", m1.length)
  console.log("Longitud m2", m2.length)
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
