import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import HomePage from './route2/HomePage'
import Products from './route2/Products'
import ProductDisplay from './route2/ProductDisplay'
import items from './route2/Item'
import Cart from './route2/Cart'


const App4 = () => {

  const [data, setdata] = useState([])
  const [cartValue, setcartValue] = useState(0)

  const addCart = () =>{
    setcartValue(cartValue+1)
  }

  useEffect(()=>{
    setdata(items)
  },[])

  return (
    <>
    <Router>
    <div className='nav'>
        <ul>
            <li>
                <Link className='link' to='/' >Home</Link>
            </li>
            <li>
                <Link className='link' to='/products' >Products</Link>
            </li>
            <li>
                <Link className='link' to='/cart' >Cart : {cartValue}</Link>
            </li>
        </ul>
    </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products data={data}/>} />
        <Route path='/products/:id' element={<ProductDisplay addCart={addCart}/>} />
        <Route path='/cart' element={<Cart cartValue={cartValue}/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App4