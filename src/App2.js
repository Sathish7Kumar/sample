import React, { useState } from "react";
import State from "./function/State";
import Greeting from "./cond/Greeting";

const App2 = () => {
  const [num, setnum] = useState("");
  const [mesg, setmesg] = useState("");
  
  const [cartvalue, setcartvalue] = useState(0);
  const [login, setlogin] = useState(false)

  const handleInc = () => {
    setcartvalue(cartvalue+1)
    // if(num %2 ==0){
    //   setmesg("entered num is even")
    // }
    // else{
    //   setmesg("entered num is odd")
    // }
    // (num %2 ==0) ? setmesg("even") : setmesg("odd")
  };
  const handleDec = () => {
    if(cartvalue>0){
      setcartvalue(cartvalue-1)
    }
  };
  return (
    <>
      <Greeting isLoggedIn={login} />
      <button onClick={()=>setlogin(!login)}>Change User</button>
      {/* <h1>Hello</h1>
    <input type="number"  onChange={(e)=>setnum(e.target.value)}  placeholder='enter ur name' /> */}
      {/* <h1>Entered Number is : {name}</h1> */}
      {/* <button onClick={handleClick}>Check</button>
    <h1>{mesg}</h1> */}
      <div>
        <h1>Cart Value : {cartvalue}</h1>
        <button onClick={handleInc}>Add</button>
        <button onClick={handleDec}>Remove</button>
      {cartvalue > 0 
      ? 
      <><h1>You have Ordered</h1></> 
      : 
      <><h1>Your cart is empty</h1></>
      }
      </div>
    </>
  );
};

export default App2;
