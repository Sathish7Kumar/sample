import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setcount] = useState(1)

    const [counter, setcounter] = useState(10)


    const increment=()=>{
        setcount(count+1)
    }

    const decrement=()=>{
        setcounter(counter-1)
    }

    //1
    useEffect(()=>{
        console.log("useEffect Called");
    })

    //2
    // useEffect(()=>{
    //     console.log("useEffect Called");
    // },[])

    //3
    // useEffect(()=>{
    //     console.log("useEffect Called");
    // },[counter])
    
    console.log("RENDER");

  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={increment}>ADD</button>
    <h1>Counter {counter}</h1>
    <button onClick={decrement}>Remove</button>
    </>
  )
}

export default Effect