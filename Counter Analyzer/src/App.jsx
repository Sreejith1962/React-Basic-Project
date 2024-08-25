import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
 
 const [counter,setCounter] = useState(0) 
//  let counter = 17

const addValue = () =>{
  setCounter(counter+1)
  // setCounter((prevC)=>prevC+1)
 
}

const removeV=()=>{
  setCounter(counter-1)
}

 

  return (
    <>
     <h1>This is a simple page {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value  </button> 

      <button onClick={removeV}
      >Remove value</button>
      {/* <p>Footer: {counter} </p> */}
    </>
  )
}

export default App
