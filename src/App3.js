import React, { useState } from 'react'
import abc from './function/flower.jpg'

const App3 = () => {

   const [count, setcount] = useState(0)
   const [name, setname] = useState("pravin")

   const [change, setchange] = useState(false)
  

  return (
    <>
    <h1>{`Value : ${count}`}</h1>
    <button onClick={()=>setcount(count+1)}>Add Count</button>
    <button onClick={()=>{
        if(count>0){
            setcount(count-1)
        }
    }}>Remove Count</button>

    <h1>{`Name : ${name}`}</h1>
    <button onClick={()=>setname("dhoni")}>Change Name</button>

    <h1>{`Is Studying : ${change}`}</h1>
    <button onClick={()=>setchange(!change)}>Change Status</button>

    <div>
        <img src={abc} height="200px"width={200} />
    </div>

    </>
  )
}
export default App3

// react Hooks - useState 
