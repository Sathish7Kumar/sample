import React, { useEffect, useState } from 'react'
import axios from 'axios'
const url = 'https://fakestoreapi.com/products'

const App8 = () => {
    const [product, setproduct] = useState([])

    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then(resp => resp.json())
    //     .then(data => setproduct(data))
    // },[])

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
    <>
    <h1>Fetch Data</h1>
    <div>
        {product.map((e,i)=>{
            return (
                <div key={i}>
                <h2>{e.title}</h2>
                <img src={e.image} height={100} width={100} />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default App8