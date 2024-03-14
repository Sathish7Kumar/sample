import React from "react";
import items from "./Item";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div>
      {items.map((e, id) => {
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
