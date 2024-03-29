import React, { useContext, useEffect, useState } from 'react'
import { FakeContext } from '../App8'

const CartApi = () => {
    const [total, settotal] = useState(0)
    const apiContext = useContext(FakeContext)
    // {product,cart,setproduct,setcart,cartValue,setcartValue}

    useEffect(()=>{
        const newPrice = apiContext.cart.reduce((a,b)=>a+b.price,0)
        settotal(newPrice)
    },[apiContext.cart])

    const handleClear = () =>{
        apiContext.setcart([])
        apiContext.setcartValue(0)
    }
    const handleRemove = (e) =>{
       const indexremv = apiContext.cart.findIndex((x)=> x===e)
       if(indexremv !== -1){

        const updateCart = [...apiContext.cart]
        updateCart.splice(indexremv,1)

        apiContext.setcart(updateCart)
        apiContext.setcartValue(updateCart.length)

       }
    }
  return (
    <>
    {
        apiContext.cart.length > 0
         ? 
        <>
        <button onClick={handleClear}>Clear Cart</button>
        <div>
            <h3>You have Ordered</h3>
        {apiContext.cart.map((e,i)=>{
            return (
                <div key={i}>
                    <h4>{e.title}</h4>
                    <img src={e.image}/>
                    <h4>Price :{e.price}</h4>
                    <button onClick={()=>handleRemove(e)}>Remove from Cart</button>
                </div>
            )
        })}
        <h4>Total Price : {total}</h4>
    </div>
        </> 
        : 
        <>
        <h4>Your Cart is Empty</h4>
        </>
    }
    </>
  )
}

export default CartApi