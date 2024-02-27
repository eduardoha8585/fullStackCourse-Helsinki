import { useState } from 'react'
import ReactDOM from 'react-dom';




const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

//Funcion para mostrar estadisticas
const Statistics = (props) => {
  const { good, neutral, bad } = props
  const totalComments = good + neutral + bad
  const tabla = document.getElementById('TablaOne')

  if ((totalComments) === 0) {
    return (
      <div>no feedback given</div>
    )
  }else{
    tabla.style.display = 'table'
  }

  return (
    <div>
     
      <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={good + neutral + bad} />
      <StatisticsLine text='average' value={((good * 1) + (neutral * 0) + (bad * -1)) / totalComments} />
      <StatisticsLine text='positive' value={(good / (totalComments)) * 100} />

    </div>
  )
}

const StatisticsLine = (props) => {
  const { text, value } = props
  
  const fila = document.getElementById(text)
  fila.cells[1].innerHTML = value  
  
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
        <Button handleClick={setToGood} text="good" />
        <Button handleClick={setToNeutral} text="neutral" />
        <Button handleClick={setToBad} text="bad" />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App