import { useState } from 'react'


const App = () =>  {
  const [counter, setCounter] = useState(0)

  const handleClick = () =>{
   console.log("Clicked")
  }

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      {/*LOS SIGUIENTES DOS BOTONES NO CAMBIAN EL ESTADO DEL STATE DE LA PAGINA POR LO TANTO
      NO SE VUELVE A CARGAR LA PAGINA*/}
      {/*Llamando a la funcion handleClick en el evento onclick del boton*/}   
      <button onClick={handleClick}>plus</button> 

      {/*Construyendo la funcion en el evento onclick del boton sin tener que llamar a una funcion
      previamente programada*/}   
      <button onClick={() => console.log("Clicked function two")}>plus 2</button>

      <button onClick={() => setCounter(counter + 1)}>Boton que cambia el state</button>
      <button onClick={() => setCounter(0)}>Boton que reestablece el state</button>
      <button onClick={increaseByOne}>increaseByOne</button>
      <button onClick={setToZero}>setToZero</button>
    </div>
  )
}

export default App
