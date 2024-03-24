import React from 'react'

const FoodHome = ({product,addCart}) => {
  return (
    <>
    <div>
        {product.map((e,i)=>{
            return(
                <div key={i}>
                    <h1>{e.name}</h1>
                    <img src={e.image} />
                    <div>
                        <h2>{e.subItemsData.name}</h2>
                        {e.subItemsData.subItems.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <h3>{item.name}</h3>
                                    <img src={item.image} />
                                    <p>{item.description}</p>
                                    <h4>{item.price}</h4>
                                    <button onClick={()=>addCart(e)}>Add to Cart</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default FoodHome