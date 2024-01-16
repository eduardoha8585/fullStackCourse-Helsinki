import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

export default App