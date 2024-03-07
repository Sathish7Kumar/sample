
// const Cart = (props) => {
//   return (
//     <>
//     <h1>My Order One plus Mobile</h1>
//     <h2>Cart Value : {props.amount}</h2>
//     </>
//   )
// }

// export default Cart

// const Cart = (x) => {
//     return (
//       <>
//       <h1>My Order One plus Mobile</h1>
//       <h2>Cart Value : {x.amount}</h2>
//       </>
//     )
//   }
  
//   export default Cart


const Cart = ({amount,deliveryTime}) => {
  
    return (
      <>
      <h1>My Order One plus Mobile</h1>
      <h2>Cart Value : {amount}</h2>
      <h2>Delivery Time : {deliveryTime}</h2>
      </>
    )
  }
  
  export default Cart