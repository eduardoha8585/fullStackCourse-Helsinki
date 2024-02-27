import { useState } from 'react'

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

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
      {/*
      <p><h1>statistics</h1></p>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {((good*1) + (neutral*0) + (bad*-1))/totalComments}</div>
      <div>positive {(good / (totalComments))*100}%*/}
      <StatisticsLine text='good' value = {good} />
      <StatisticsLine text='neutral' value = {neutral} />
      <StatisticsLine text='bad' value = {bad} />
      <StatisticsLine text='all' value = {good + neutral + bad} />
      <StatisticsLine text='average' value = {((good*1) + (neutral*0) + (bad*-1))/totalComments} />
      <StatisticsLine text='positive' value = {(good / (totalComments))*100} />
      
      </div> 
  )
}

const StatisticsLine = (props) =>{
  const {text, value} = props

  return(
    <div>
      {text} {value}
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
        <Button handleClick = {setToGood} text = "good" />
        <Button handleClick={setToNeutral} text = "neutral" />
        <Button handleClick={setToBad} text ="bad" />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App