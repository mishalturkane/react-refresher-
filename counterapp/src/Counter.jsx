
import React from 'react';
import './App.css';
import { useState } from 'react';
export default function Counter(){

    let [counter, setCounter] = useState(0);

   return (
    <div>
        <h1>Counter Game</h1>
        <h2>{counter}</h2>
        <button onClick={()=> {setCounter(counter+1)}}>Increment</button>
        <button  onClick={()=> {setCounter(counter-1)}}>Decrement</button>
        <button  onClick={()=> {setCounter(counter=0)}}>Reset</button>
    </div>
   )
}
