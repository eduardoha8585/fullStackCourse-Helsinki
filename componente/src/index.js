import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <>
      <p>Hello World, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

export default App