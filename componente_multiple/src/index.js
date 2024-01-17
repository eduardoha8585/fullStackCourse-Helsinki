import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} {props.lastname}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Miguel' lastname='Guerrero Ibarra'/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

export default App