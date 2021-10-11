import './App.css'
import Test from './Test'
import Test2 from './Test2'

// import { useEffect, useState } from 'react'
function App() {
  const [appState, setAppState] = useState(0)
  const [app2State, setApp2State] = useState(100)
  return (
    <div className="App">
      <Test></Test>
      <Test2></Test2>
    </div>
  )
}

export default App
