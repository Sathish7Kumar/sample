// import React, { useState } from 'react'
// import Home1 from './context/Home1'

// const App = () => {
//   const [name , setname ] = useState("DHONI")
//   return (
//     <>
//     <h1>APP COMPONENT</h1>
//     <Home1 playername={name}/>
//     </>
//   )
// }

// export default App

import React, { createContext, useState } from 'react'
import Home1 from './context/Home1'
import Context2 from './context/Context2'
import Effect from './Effect/Effect'

export  const PlayerContext = createContext()

const App = () => {

  const [name , setname ] = useState("DHONI")

  // context = > create , provide , useContext


  return (
    <>
    <PlayerContext.Provider value={name}>
    <h1>APP COMPONENT</h1>
    <Home1 name="sathish" />
    </PlayerContext.Provider>
    <Effect/>
    {/* <Context2/> */}
    </>
  )
}

export default App