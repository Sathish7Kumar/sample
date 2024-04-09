import React from 'react'
import EmployeeDetails from './Context&Reducer/EmployeeDetails'
import { EmployeeProvider } from './Context&Reducer/EmployeeContext'

const App12 = () => {
  return (
    
    <EmployeeProvider>

    <EmployeeDetails/>

    </EmployeeProvider>
  )
}

export default App12