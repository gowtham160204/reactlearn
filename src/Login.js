import React, { useState } from 'react'
import { TbCone2 } from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const[data, setData] = useState (1110)
  const[input1 , setInput1] = useState("")
  const[password1 , setPassword1] = useState("")
  const handledata = () =>{
    console.log(input1 , password1);

    if(password1 === '' ){
      toast.error("please Enter the paasword")
    }
    else if(input1 === ''){
      toast.error("please Enter the username")
    }
    else if(password1.length<=6){
      toast.warning("should be greater than 6")
    }
    else{
      toast.success("Data updated")
      localStorage.setItem("username",input1)
      localStorage.setItem("password",password1)
      window.location.href="/doc"
    }

  }

  const handleIncrement= () =>{
    setData(data + 1)

  }
  const handleDecrement= () =>{
    setData(data-1)
  }  
  return (
    <div>
        <h1>BV Industrys</h1>
        <label>{data}    user name</label>
        <button onClick = {handleIncrement}>add</button>
        <button onClick = {handleDecrement}>less</button>
        
        <br></br>
        <label> insert</label>
        <input type='text' value={input1}
        onChange={(e)=> setInput1(e.target.value)}/>
        <label>password</label>
        <input type ='password' value={password1}
        onChange={(e)=> setPassword1(e.target.value)}/>
        
        <button onClick={handledata}>submit</button>
        <ToastContainer />
    </div>
  )
}

export default Login