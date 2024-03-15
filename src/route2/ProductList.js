import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = (props) => {
    const nav = useNavigate()
  return (
    <div
    style={{cursor:"pointer",fontFamily:"sans-serif"}}
     onClick={()=>{
        nav('/products/' + props.id)
    }}>
    <img src={props.image} height={100} width={100} />
    <h2>{props.name}</h2>
    </div>
  )
}

export default ProductList