import React, { useEffect, useState } from "react";
import FoodData from "./food/FoodData";
import FoodHome from "./food/FoodHome";
import FoodCart from "./food/FoodCart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const App7 = () => {
  const [product, setproduct] = useState([]);
  const [cartItem, setcartItem] = useState([]);

  useEffect(() => {
    setproduct(FoodData);
  });

  const addCart = (items) => {
    setcartItem((prev) => [...prev,items]);
  };

  const clearCart = () => {
    setcartItem([]);
  };

  const removeCart = (item) => {
    setcartItem((prevItem) => prevItem.filter((e, i) => i !== item));
  };

  const calcTotal = () => {
    let total = 0;
    cartItem.forEach((e) => (total += parseInt(e.price)));
    return total;
  };

  const buyNow = () => {
    alert("order placed SuccessFully");
    setcartItem([]);
  };

  return (
    <>
      
      <BrowserRouter>
      <ul className="nav">
        <li>
        <Link className="link" to='/'><h1>Home</h1></Link>
        </li>
        <li>
        <Link className="link" to='/cart'><h1>Cart : 🛒{cartItem.length}</h1></Link>
        </li>
      </ul>
        <Routes>
          <Route
            path="/"
            element={<FoodHome addCart={addCart} product={product} />}
          />
          <Route
            path="/cart"
            element={
              <FoodCart
                buyNow={buyNow}
                removeCart={removeCart}
                calcTotal={calcTotal}
                clearCart={clearCart}
                cartItem={cartItem}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App7;
