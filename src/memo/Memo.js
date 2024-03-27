import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [count, setcount] = useState(0)

    const [arr, setarr] = useState([10,25,96])

    function max(){
        console.log("func Called");
        return Math.max(...arr)
    }

   const mem =  useMemo(()=> max(),[arr])

   console.log("re-render");
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={()=>setcount(count+1)}>ADD</button>
    <hr/>
    <h1>{JSON.stringify(arr)}</h1>
    <h1>Max Val : {mem}</h1>
    <button onClick={()=>setarr([...arr,Math.round(Math.random()*1000)])}>ADD ARRAY</button>
    </>
  )
}

export default Memo

// import React, { useMemo, useState } from 'react'

// const Memo = () => {
//     const [render, setrender] = useState()
//     const [modify, setmodify] = useState()
//     function getNum(){
//         let random = ""
//         for(let i=0;i<=1000000000;i++){
//             if(i==99999999){
//                 random  = Math.round(Math.random()*1000)
//             }
//         }
//         return random
//     }
//     const mem2 = useMemo(()=> getNum(),[modify])
//   return (
//     <>
//     <h1>Val : {render}</h1>
//     <button onClick={()=>setrender(Math.round(Math.random()*1000))}>Render</button>
//     <h1>Val 2 : {mem2}</h1>
//     <button onClick={()=>setmodify(Math.round(Math.random()*1000))}>Modify</button>
//     </>
//   )
// }

// export default Memo

// useCallback , useRef