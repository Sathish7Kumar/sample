import React, { useState } from 'react'
import abc from './flower.jpg'
const State = () => {
    const [count, setcount] = useState(0)
    const [name, setName] = useState("dhoni")

    const handleCount = () =>{
        setcount(count + 1)
    }
  return (
    <>
    <h1>Value : {count} </h1>
    <button onClick={()=>{
        if(count>0){
            setcount(count-1)
        }
        }}>Decrement</button>
    <button onClick={handleCount}>ADD</button>
    {/* <img src={abc}  /> */}
    <h1>My name : {name} </h1>
    <button onClick={()=>setName("Virat")}>Change Name</button>
    </>
  )

  
}
export default State

