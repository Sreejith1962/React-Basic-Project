import { useState } from 'react'
import './App.css'

function App() {
  const [background, setBackgroundColor] = useState("Black")

  function changeColor(color)
  {
    setBackgroundColor(color)
  }

 return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: background}}>
        <div className='fixed bottom-0 w-full  flex justify-center pb-4'>
        <button className='bg-red-600 text-white font-bold py-2 px-4 rounded spacing-7'
        onClick={()=> setBackgroundColor('red')}
        >Red</button>

        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded spacing-7'
        onClick={()=> setBackgroundColor('blue')}
        >Blue</button>

        <button className='bg-green-400 text-white font-bold py-2 px-4 rounded spacing-7'
        onClick={()=> changeColor('green')}
        >Green</button>

        <button className='bg-yellow-400 text-white font-bold py-2 px-4 rounded border-spacing-7'
        onClick={()=> changeColor('yellow')}
        >Yellow</button>

        <button className='bg-gray-900 text-white font-bold py-2 px-4 rounded border-spacing-7'
        onClick={()=>changeColor('black')}
        >
          
          Black
        </button>
        </div>
        
      </div>
    </>
  )
}

export default App
