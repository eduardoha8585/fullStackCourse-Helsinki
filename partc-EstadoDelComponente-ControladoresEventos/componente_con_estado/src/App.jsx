import { useState } from 'react'


const App = () => {
  
  //Agregando state al componente inicializando en cero (0)
  const [counter, setCounter] = useState(0)

  setTimeout(() => setCounter(counter + 1), 1000)

  console.log("rendering ... ", counter)

  return (
    <>{counter}</>
  )
}

export default App
