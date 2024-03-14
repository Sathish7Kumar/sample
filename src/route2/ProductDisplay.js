import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import items from './Item'


const ProductDisplay = () => {
    const {id} = useParams()
    const x = useNavigate()
    const pro = items.find((e) => e._id == id )
    const handleBack = ()=>{
        x('/products')
    }
  return (
   <>
    <div>
        <h1>{pro.name}</h1>
        <img src={pro.image} height={100} width={100} />
        <h4>Specs : {pro.desc}</h4>
        <h3>{`Price : {pro.price}`}</h3>
        <button>Add</button>
        <button onClick={handleBack}>Back to Mobile Page</button>

    </div>
   </>
  )
}

export default ProductDisplay