import { useState } from 'react'
import Navbar from './components/common/Navbar'
import './App.css'
import ShowCreators from './components/pages/ShowCreators'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ShowCreators />
    </>
  )
}

export default App
