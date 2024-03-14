import React from 'react'
import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import HomePage from './components/HomePage'
import Mobile from './components/Mobile'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    {/* <div className='nav'>
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/mobile' >Mobile</Link>
            </li>
            <li>
                <Link to='/cart' >Cart</Link>
            </li>
        </ul>
    </div> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/mobile' element={<Mobile/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App