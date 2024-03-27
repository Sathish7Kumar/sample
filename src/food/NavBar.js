import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdCloseCircle } from "react-icons/io";


const NavBar = ({cartItem}) => {
    const [showNav, setshowNav] = useState(false)
    const toggle = () =>{
        setshowNav(!showNav)
    }
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <Link className='link' to='/'><h1>🍕🍔Home</h1></Link>
        </div>
        <div onClick={toggle}>
            <IoMdCloseCircle className='icon' style={{fontSize:"50px",color:"red"}}/>
        </div>
        <ul className = {`nav-links ${showNav ? "show" : ""}`}>
            <li>
            <Link className='link' to='/cart'><h1>Cart : 🛒{cartItem.length}</h1></Link>
            </li>
        </ul>
        </div>
    </>
  )
}

export default NavBar