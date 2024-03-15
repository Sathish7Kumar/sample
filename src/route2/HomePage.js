import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <h1>Go to ProDuct Page : <Link to="/products">Click</Link></h1>
    </div>
  )
}

export default HomePage