import React, { useContext } from 'react'
import { PlayerContext } from '../App'

const Home3 = () => {
    const x = useContext(PlayerContext)
  return (
    <>
    <h1>Player name is {x} </h1>
    </>
  )
}

export default Home3