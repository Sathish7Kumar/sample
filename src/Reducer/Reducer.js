import React, { useContext, useReducer } from 'react'
import { Balance } from '../App5'


const transaction = (state,action) =>{

    switch(action.type){
        case "Deposit" :
           return state +  action.payload
        case "Withdraw" :
            return state - action.payload
        default :
        return state
    }
}

const Reducer = () => {

    const x = useContext(Balance)

    const [state,dispatch] =useReducer(transaction ,x)
    const deposit = (amount) =>{
        dispatch({type: "Deposit" , payload:amount})
    }
    const withdraw = (amount) =>{
        dispatch({type: "Withdraw" , payload:amount})
    }
  return (
    <>
    <h1>Reducer</h1>
    <h2>Balance : {state}</h2> <br/> <br/>
    <input type='number' /> <br/> <br/>
    <button onClick={()=>deposit(100)}>Deposit</button> <br/> <br/>
    <button onClick={()=>withdraw(100)}>Withdraw</button>
    </>
  )
}

export default Reducer