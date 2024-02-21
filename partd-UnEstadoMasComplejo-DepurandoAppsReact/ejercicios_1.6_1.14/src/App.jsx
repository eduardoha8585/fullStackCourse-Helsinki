import { useState } from 'react'

//Funcion para mostrar estadisticas
const Statistics = (props) =>{
  const {good, neutral, bad} = props
  const totalComments = good+neutral+bad

  if((totalComments) === 0){
    return(
      <div>no feedback given</div>
    )
  }

  return (
    <div>
      <p><h1>statistics</h1></p>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {((good*1) + (neutral*0) + (bad*-1))/totalComments}</div>
      <div>positive {(good / (totalComments))*100}%</div> {/*Cambiar a porcentaje averiguar*/}
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1)

  const setToNeutral = () => setNeutral(neutral + 1)

  const setToBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={setToGood}>good</button>
        <button onClick={setToNeutral}>neutral</button>
        <button onClick={setToBad}>bad</button>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App