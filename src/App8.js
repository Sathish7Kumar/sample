import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter, Link,} from "react-router-dom";
import axios from 'axios'
import ProductApi from './apiContext/ProductApi';
import CartApi from './apiContext/CartApi';
import Homepage from './apiContext/Homepage';
const url = 'https://fakestoreapi.com/products'
export const FakeContext  = createContext()

const App8 = () => {

    const [product, setproduct] = useState([])
    const [cart, setcart] = useState([])
    const [cartValue, setcartValue] = useState(cart.length)
    
    const getProducts = async() =>{
        try {
            const response = await axios.get(url)
            setproduct(response.data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getProducts()
    },[])
   

  return (
    <FakeContext.Provider value={{product,cart,setproduct,setcart,cartValue, setcartValue}} >
    <Router>
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/cart'>Cart {cartValue} </Link></li>
        </ul>
    </div>
    <Routes>
        <Route path='/' element={<Homepage/>}/>    
        <Route path='/product' element={<ProductApi/>}/>
        <Route path='/cart' element={<CartApi/>}/>
    </Routes>
    </Router>
    </FakeContext.Provider>
  )
}

export default App8