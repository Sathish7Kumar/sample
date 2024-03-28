import React, { createContext, useState } from 'react'
import Reducer from './Reducer/Reducer'
import Memo from './memo/Memo'
import Callback from './callback/Callback'
import Ref from './ref/Ref'

export const Balance = createContext()

const App5 = () => {

    const [count, setcount] = useState(100)

  return (
    <Balance.Provider value={count}>
    <Reducer/>
    {/* <Memo/> */}
    {/* <Callback/> */}
    {/* <Ref/> */}
    </Balance.Provider>
  )
}

export default App5