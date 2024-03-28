import React, { useState } from 'react'
import Page1 from './Page/Page1'
import Page2 from './Page/Page2'
import './App.css'

const App9 = () => {

    // const [currentPage, setcurrentPage] = useState("")

    // const handlePage1 = () =>{
    //     setcurrentPage("page1")
    // }
    // const handlepage2 = () =>{
    //     setcurrentPage("page2")
    // }

    // const [showPage, setshowPage] = useState(true)
    
    // const handlePage1 = () =>{
    //     setshowPage(true)
    // }
    // const handlepage2 = () =>{
    //     setshowPage(false)
    // }



    const [showPopup, setshowPopup] = useState(false)

    const handleClick = () =>{
        setshowPopup(!showPopup)
    }
    
  return (
    <>
    {/* <h1>Home Page</h1>
    <div>
    <button onClick={handlePage1}>Page1</button>
    <button onClick={handlepage2}>Page2</button>
    </div>
    <div>
        {showPage ? <Page1/> : <Page2/>}
    </div> */}



    <div>
        {!showPopup && <button onClick={handleClick}>Open Popup</button>}

        {showPopup && (
            <>
            <div className='img-container'>
            <img className='m-image' src='https://ik.imagekit.io/satzz/ecommerce/oneplusnord%202t.jpg?updatedAt=1690880028076' />
            <button className='btn-c' onClick={handleClick}>X</button>
            </div>
            </>
        )}
    </div>

    </>  
  )
}

export default App9