import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Miguel'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age + 28}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

export default App