import { useState } from 'react'
import './App.css'
import { incrementCounterHandler } from './handlers/increment'
import { decrementCounterHandler } from './handlers/decrement'
import { resetCounterHandler } from './handlers/reset'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <img className='logo' src="/src/assets/797-counter.svg" alt="counter" />
      <h2>Counter: {counter}</h2>
      <button onClick={() => incrementCounterHandler(setCounter)}>Increment➕</button>
      <button onClick={() => resetCounterHandler(setCounter)}>Reset0️⃣</button>
      <button onClick={() => decrementCounterHandler(setCounter)}>Decrement➖</button>
    </div>
  );
};

export default App
