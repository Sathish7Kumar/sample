import React, { useContext, useState } from "react";
import { FakeContext } from "../App8";

const ProductApi = () => {
  const [input, setinput] = useState("");
  const apicontext = useContext(FakeContext);
  
  // {product,cart,setproduct,setcart}

  // const fltdProduct = apicontext.product.filter(
  //   (e) => e.title.toLowerCase().includes(input.toLowerCase())
  // );

  return (
    <>
      <h2>My Store</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
      </div>
      <div>
        {apicontext.product
          .filter((e) => e.title.toLowerCase()
          .includes(input.toLowerCase()))
          .map((e,i) => {
            return (
              <div key={i}>
                <h2>{e.title}</h2>
                <img src={e.image} />
                <h5>Specs : {e.description}</h5>
                <h4>Price: {e.price}</h4>
                <h5>Rating : {e.rating.rate}</h5>
                <h5>Count : {e.rating.count}</h5>
                <button
                  onClick={() => {
                    apicontext.cart.push(e);
                    apicontext.setcartValue(apicontext.cart.length);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductApi;
