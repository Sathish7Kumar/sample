import React from 'react'
import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import HomePage from './route2/HomePage'
import Products from './route2/Products'
import ProductDisplay from './route2/ProductDisplay'


const App4 = () => {
  return (
    <>
    <Router>
    <div className='nav'>
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/products' >Products</Link>
            </li>
            {/* <li>
                <Link to='/cart' >Cart</Link>
            </li> */}
        </ul>
    </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDisplay/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App4