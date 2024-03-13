import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const HomePage = () => {
  return (
    <>
    <h1 className="heading">Home Page</h1>
    <Link className='link imgLink' to="/mobile">
        <img src='https://ik.imagekit.io/satzz/ecommerce/iphone-12-mini.jpg?updatedAt=1690880027814' height={100} width={100} />
    </Link>
    {/* <Link className='link' to='/cart'>CART</Link> */}
    </>
  )
}

export default HomePage