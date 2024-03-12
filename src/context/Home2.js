import React, { useContext } from 'react'
import Home3 from './Home3'
import { PlayerContext } from '../App'

const Home2 = () => {
    const a = useContext(PlayerContext)
  return (
    <>
    <h1>Home2 {a}</h1>
    {/* <Home3 playername={playername}/> */}
    <Home3/>
    </>
  )
}

export default Home2