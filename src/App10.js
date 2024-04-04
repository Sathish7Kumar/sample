import React, { useState } from 'react'

const App10 = () => {

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [pswd, setpswd] = useState("")
    const [cpswd, setcpswd] = useState("")

    const [usernameE, setusernameE] = useState("")
    const [emailE, setemailE] = useState("")
    const [pswdE, setpswdE] = useState("")
    const [cpswdE, setcpswde] = useState("")

    
    const valid =   // true

    username !== "" &&
    email !=="" &&
    pswd !== "" &&
    cpswd !== "" 

   const handleName = (e) =>{
    setusername(e.target.value)
    setusernameE(e.target.value !== "" ? "" : "username is required")
    }

    const handleEmail = (e) =>{
        setemail(e.target.value)
        setemailE(e.target.value !== "" ? "" : "email is required")
    }

    const handlePswd = (e) =>{
        setpswd(e.target.value)
        setpswdE(e.target.value !== "" ? "" : "password is required")
    }

    const handleCpswd = (e) =>{
        setcpswd(e.target.value)
        setcpswde(e.target.value !== "" ? "" : "confirm password is required")
        setcpswde(e.target.value ===  pswd ?  "" : " password doesn't match")
    }

 

  return (
    <>
    <form>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' onChange={handleName}  />
        <p>{usernameE}</p>
        <label htmlFor='mail'>Email</label>
        <input id='mail'  type='email' onChange={handleEmail} />
        <p>{emailE}</p>
        <label htmlFor='pwd'>Password</label>
        <input id='pwd'  type='password' onChange={handlePswd} />
        <p>{pswdE}</p>
        <label htmlFor='cpwd'>Confirm Password</label>
        <input id='cpwd' type='password'onChange={handleCpswd} />
        <p>{cpswdE}</p>
        <button type='submit' disabled={!valid} >Submit</button>
    </form>
    </>
  )
}

export default App10