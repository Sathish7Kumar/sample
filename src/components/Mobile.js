import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Product";


const Mobile = () => {

    const [data, setdata] = useState([])

    useEffect(()=>{
        setdata(Products)
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
                <p>Spec {item.desc}</p>
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
