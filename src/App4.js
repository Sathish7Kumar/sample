import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import HomePage from "./route2/HomePage";
import Products from "./route2/Products";
import ProductDisplay from "./route2/ProductDisplay";
import items from "./route2/Item";
import Cart from "./route2/Cart";

const App4 = () => {
  
  const [data, setdata] = useState([]);

  const [cartItem, setcartItem] = useState([]);

  const addCart = (item) => {
    setcartItem((prevItem) => [...prevItem, item]);
  };

  const clearCart = () => {
    setcartItem([]);
  };

  const removeCart = (item) => {
    setcartItem((prevItem) => prevItem.filter((e, i) => i !== item));
  };

  const calcTotal = () => {
    let total = 0;
    cartItem.forEach((e) => (total = total + e.price));
    return total;
  };

  const buyNow = () => {
    alert("order placed SuccessFully");
    setcartItem([]);
  };

  useEffect(() => {
    setdata(items);
  }, []);

  return (
    <>
      <Router>
        <div className="nav">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="link" to="/cart">
                Cart : {cartItem.length}
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products data={data} />} />
          <Route
            path="/products/:id"
            element={<ProductDisplay addCart={addCart} cartItem={cartItem} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                buyNow={buyNow}
                removeCart={removeCart}
                calcTotal={calcTotal}
                clearCart={clearCart}
                cartItem={cartItem}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App4;
