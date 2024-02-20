import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
      console.log('Hello', who)
  }

  //Funcion encargada de actualizar el estado
  const setToValue = (newValue) => {
    console.log('Value now', newValue)
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <p>
        <button onClick={hello('World')}>Button</button>
        <button onClick={hello('React')}>Button</button>
        <button onClick={hello('Function')}>Button</button>
      </p>      

     
        <p>BOTONES PARA EL CAMBIO DE ESTADO</p>
        <button onClick={() => setToValue(1000)}>
          Thousand
        </button>
        <button onClick={() => setToValue(0)}>
          Reset
        </button>
        <button onClick={() => setToValue(value + 1)}>
          increment
        </button>
      
    </div>
  )
}

export default App
