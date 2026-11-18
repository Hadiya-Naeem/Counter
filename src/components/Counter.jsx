import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    const increase = () =>{
        setCount (count = count + 1)
    }
    const decrese = () =>{
        if(count <= 0){
            setCount(count = 0)
        }
        else{
            setCount(count = count - 1)
        }
    }
 const reset = () =>{
            setCount(count = 0)
        }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrese}>decrease</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter