import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './assets/Inputbox'

function App() {
  const [height, setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setbmi] = useState(0)
  
  function calculate()
  {
    let b=((weight/(height*height))*10000)
    setbmi(b)
  }

  
  
  return (
 <>
  <div className='w-full h-screen bg-blue-300 mx-auto flex justify-center items-center align-middle'>
  <div className='bg-inherit h-auto w-auto  flex align-middle'>
      <img className='h-56' src="https://as2.ftcdn.net/v2/jpg/02/98/08/31/1000_F_298083141_qxOJbu1GuMqOwnKPNlEEXpQ14LheDk6t.jpg" alt="" />
  </div>
     <div className='h-96 bg-white p-4 rounded shadow-md w-96 flex flex-col items-center justify-center ml-16'>
        <h2 className="text-2xl text-slate-400 font-bold  ">BMI CALCULATOR</h2>
        
          <InputBox onChange={(e)=>{setHeight(e.target.value)}} label={"Height"} placeholder={"0cm"} ></InputBox>
          <InputBox onChange={(e)=> {{setWeight(e.target.value)}}} label={"weight"} placeholder={"0Kg"}/>
        
          <button onClick={(e)=>calculate() }className='bg-black text-white p-5 mt-2' > Calculate BMI</button>
          <p className=' '>Your BMI is {bmi}</p>
          
    </div>
        <div className=" flex flex-col justify-end ml-32 bg-red-200 p-16 text-xl "> 

        <p>Underweight = lessthan 18.5</p>
        <p>Normal weight = 18.5–24.9</p>
        <p>Overweight = 25–29.9</p>
        <p>Obesity = BMI of 30 or greater</p>

     </div>
  </div>
 </>
  )
}

export default App
