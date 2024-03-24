import React from 'react'
// import {Link} from "react-router-dom";

const FoodCart = ({ cartItem, clearCart, removeCart, calcTotal, buyNow }) => {
    return (
    <>
      <div>
        {cartItem.length > 0 ? (
          <>
            <h1>You have Ordered</h1>
            <button onClick={clearCart}>Clear Cart</button>
            <div>
              {cartItem.map((e, i) => {
                return (
                  <div key={i}>
                    <h3>{e.name}</h3>
                    <img src={e.image} height={100} width={100} />
                    <h4>Price : Rs{e.price}</h4>
                    <button onClick={() => removeCart(i)}>
                      Remove from Cart
                    </button>
                  </div>
                );
              })}
            </div>
            <h2>Total Amount : Rs {calcTotal()}</h2>
            <button onClick={buyNow}>Buy Now</button>
          </>
        ) : (
          <>
            <h1>Your Cart is Empty </h1>
            {/* <Link to="/products">Click here to Order</Link> */}
          </>
        )}
      </div>
    </>
  )
}

export default FoodCart