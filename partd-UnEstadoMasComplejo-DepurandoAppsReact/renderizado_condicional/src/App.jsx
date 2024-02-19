import { useState } from 'react'

{/*El componente History muestra componentes diferentes segun el estado de la aplicación
llamando a esto renderizado condicional*/}
const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is usted by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {props.allClicks.join('')}
    </div>
  )
}

const Button = ({handleClick, text}) =>{
  return <button onClick={handleClick}>{text}</button>
}




const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClicks = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClicks = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
      <div>
        {left}
        <Button handleClick={handleLeftClicks} text='Left'/>
        <Button handleClick={handleRightClicks} text='Right' />
        {right}
        <History allClicks={allClicks}/>
      </div>
  )
}


export default App
