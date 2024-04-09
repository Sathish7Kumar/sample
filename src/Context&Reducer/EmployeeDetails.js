import React, {  useState } from 'react'
import { useEmployeeContext } from './EmployeeContext'


const EmployeeDetails = () => {

    const [name, setname] = useState("")
    const [role, setrole] = useState("")

    const {state,dispatch} = useEmployeeContext()

    console.log(state);

    const handleAdd = () =>{
        if(!name || !role){
            return null
        }
        const newEmployee = {
            id : Math.round(Math.random()*100) ,
            name:name,
            role:role
        }
        
        dispatch({type:"ADD_EMP",payload:newEmployee})
        setname(" ")
        setrole(" ")
    }
    const handleDelete = (id) =>{
       dispatch({type:"EMPDELT",payload:id}) 
    }

  return (
    <>
    <h2>Employee Details</h2>
    <div>
    <input type='text' value={name} onChange={(e)=>setname(e.target.value)}  placeholder='Enter EMP Name' />
    <input type='text' value={role} onChange={(e)=>setrole(e.target.value)} placeholder='Enter EMP Role' />
    <button onClick={handleAdd}>Add</button>
    </div>
    <div>
        <ul>
            {state.employees.map((e,i)=>{
                return (
                    <li key={i}>
                       EMP ID : {e.id} Emp.Name : {e.name} , Role : {e.role} <button onClick={()=>handleDelete(e.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
    </>
  )
}

export default EmployeeDetails

