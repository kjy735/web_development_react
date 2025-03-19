import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import StateUse from './Stateuse'
import ReducerUse from './ReducerUse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <br />
      <StateUse />
      <br />
      <ReducerUse />
    </>
  )
}

export default App
