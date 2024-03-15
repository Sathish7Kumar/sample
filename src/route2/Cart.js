import React from 'react'

const Cart = ({cartValue}) => {
  return (
    <>
    <div>
        {cartValue > 0 ? <>
        <h1>You have Ordered</h1>
        <h2>Total Amount</h2>
        </> : 
        <>
        <h1>Your Cart is Empty</h1>
        </>}
    </div>
    </>
  )
}

export default Cart