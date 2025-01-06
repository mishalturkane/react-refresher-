import React from 'react'
import { useState } from 'react'

function App() {

  const [color,setColor] = useState("olive");
  return (
    <div
    className="w-screen h-screen justify-center items-center flex gap-1"
    style={{ backgroundColor: color }}
  >
    <button className='bg-green-500' onClick={()=> setColor("green")}>green</button>
    <button className='bg-red-500' onClick={()=> setColor("red")}>red</button>
    <button className='bg-yellow-500' onClick={()=> setColor("yellow")}>yellow</button>
    <button className='bg-blue-500' onClick={()=> setColor("blue")}>blue</button>
    <button className='bg-pink-500' onClick={()=> setColor("pink")}>pink</button>
  </div>
  
  )
}

export default App