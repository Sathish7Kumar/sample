import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = ({name,id,image}) => {
    const nav = useNavigate()
  return (
    <>
    <div
    style={{cursor:"pointer",fontFamily:"sans-serif"}}
     onClick={()=>{
        nav('/products/' + id)
    }}>
    <img src={image} height={100} width={100} />
    <h2>{name}</h2>
    </div>
    </>
  )
}

export default ProductList