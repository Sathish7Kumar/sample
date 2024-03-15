import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Product";


const Mobile = () => {

    const [data, setdata] = useState([])


    // useEffect(()=>{
    //     setdata(Products)
    // },[])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(pro => setdata(pro))
      .catch(err => console.log(err))
    },[])

  return (
    <>
      <h1 className="heading">Mobile Page</h1>
      {/* <Link className='link' to='/'>Home</Link> */}
      <div>
        {data.map((item,index)=>{
            return(
                <div key={index}>
                <h1>{item.name}</h1>
                <img src={item.image} height={100} width={100} />
                <p>Specs :  {item.description}</p>
                <h4>Price {item.price}</h4>
                <button>Add</button>
                </div>
            )
        })}
      </div>
    </>
  );
};

export default Mobile;
