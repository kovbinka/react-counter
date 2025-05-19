import { useState } from 'react'
import './App.css'
import { incrementCounterHandler } from './handlers/increment'
import { decrementCounterHandler } from './handlers/decrement'
import { resetCounterHandler } from './handlers/reset'
import Button from './components/Button'
import CounterLogo from './assets/797-counter.svg'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <img className='logo' src={CounterLogo} alt="counter" />
      <h2>Counter: {counter}</h2>
      <div className="button-group">
        <Button
          title="Increment"
          emoji="➕"
          onClick={() => incrementCounterHandler(setCounter)}
        />
        <Button
          title="Reset"
          emoji="0️⃣"
          onClick={() => resetCounterHandler(setCounter)}
        />
        <Button
          title="Decrement"
          emoji="➖"
          onClick={() => decrementCounterHandler(setCounter)}
        />
      </div>
    </div>
    
  );
};

export default App
