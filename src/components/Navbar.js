import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <ul>
            <li>
                <Link className='link' to='/' >Home</Link>
            </li>
            <li>
                <Link className='link' to='/mobile' >Mobile</Link>
            </li>
            <li>
                <Link className='link' to='/cart' >Cart</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar