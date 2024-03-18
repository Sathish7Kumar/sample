import React, { createContext, useState } from 'react'
import Reducer from './Reducer/Reducer'

export const Balance = createContext()

const App5 = () => {

    const [count, setcount] = useState(100)

  return (
    <Balance.Provider value={count}>
    <Reducer/>
    </Balance.Provider>
  )
}

export default App5