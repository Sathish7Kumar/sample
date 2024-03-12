import React, { createContext, useContext, useState } from 'react'

const PlayerContext = createContext()

const Context2 = () => {

    const [name, setname] = useState("MSD")
    
  return (
    <PlayerContext.Provider value={name}>
    <h1>Parent</h1>
    <Home1/>
    </PlayerContext.Provider>
  )
}

export default Context2

const Home1 = () => {
    return (
      <>
        <h1>HOME1</h1>
      <Home2/>
      </>
    )
  }


  const Home2 = () => {
    return (
      <>
      <h1>HOME2</h1>
      <Home3/>
      </>
    )
  }

  
  const Home3 = () => {
    const x = useContext(PlayerContext)
    return (
      <>
      <h1>HOME3</h1>
      <h1>{`Player name ${x}`}</h1>
      </>
    )
  }

