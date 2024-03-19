import React, { useState } from "react";
import ProductList from "./ProductList";

const Products = ({ data }) => {
  return (
    <div>
      {data.map((e, i) => {
        return (
          <div key={i}>
            <ProductList id={e._id} name={e.name} image={e.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
