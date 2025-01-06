import React from 'react'
import { useState } from 'react';

function Bg() {
    const [color , changeColor] = useState("red");
    function change(){
        changeColor("red")
    }
  return (
    <div>
      
       <button className='bg-red-500' 
       onClick={()=>{change()}}
       >red color</button>
        </div>
  )
}

export default Bg