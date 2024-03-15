import React, { useState } from "react";
import ProductList from "./ProductList";

const Products = ({data}) => {

  return (
    <div>
      {data.map((e, id) => {
        return (
          <>
            <ProductList key={id} id={e._id} name={e.name} image={e.image} />
          </>
        );
      })}
    </div>
  );
};

export default Products;
