import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext()

const initalState = {
    employees : [
        // {name:"VASU",role:"MERN DEV"},
        // {name:"Pravin",role:"MERN DEV"}
    ]
}

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_EMP" :
            return{
                ...state,
                employees : [...state.employees,action.payload]
            }
        case "EMPDELT" :
            return{
                ...state,
                employees : state.employees.filter((x)=>{
                    return x.id !== action.payload
                })
            }
         default :
            return state
    }
}

export const EmployeeProvider = ({children})=>{
    const [state,dispatch] =useReducer(reducer,initalState)
    return(
        <EmployeeContext.Provider value={{state,dispatch}}>
           {children} 
        </EmployeeContext.Provider>
    )
}

export  const useEmployeeContext = () =>{
    const context = useContext(EmployeeContext)
    if(!context){
        throw new Error("Error Occured")
    }
    return context
}

