import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App'

function App() {

  //creando objeto
  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function(){
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b){
      console.log(a + b)
    }
  }

  //asignando metodo despues de declarar objeto
  arto.growOlder = function(){
    this.age += 1
    console.log (this.age)
  }

  //llamando a los metodos del objeto
  arto.greet()
  arto.growOlder()
  arto.doAddition(1, 4)

  //creando variable de referencia a metodo ToAddition del objeto
  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)
 
  //creando variable de referencia a metodo greet del objeto
  const referenceToGreet = arto.greet
  /*De esta manera al llamar a la funcion greet del objeto a traves de una referencia, usando bind obligando
  apuntar a arto (.bind(arto)) con un tiempo de espera de un segundo obligo al this.name de la función greet
  apuntar a Arto independiente de donde y como se llame al metodo*/
  setTimeout(referenceToGreet.bind(arto), 1000)
}

export default App
