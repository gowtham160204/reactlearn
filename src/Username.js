import React, { useState } from 'react'
import { BsFileEarmarkLock2 } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';


function Username() {
    const[input1, setInput1] = useState('')
    const[input2, setInput2] = useState('')
    const dispatch = useDispatch();
    const[inputValue,setInputValue]= useState('')
    const[passwordValue,setPasswordValue]=useState('')
    const[error,setError] = useState('')
    const[passwordError, setPasswordError]=useState('')
    const handleSubmit = (e) =>{
      e.preventDefault()

      if (inputValue.trim() === ''){
        setError('please enter a value')
        toast.error("please insert the value")

      }else{
        setError('')
      }
      if(passwordValue.trim()===''){
        setPasswordError('please enter the password')
        toast.error("Please enter the password")
      }else{
        setPasswordError('')
      }
      toast.success("validation success")
   }
       return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>user</label>
        <input type='text' value={inputValue}onChange={(e) => setInputValue(e.target.value)}/>
        <lable>passsword</lable>
        <input type="password" value={passwordValue}onChange={(e)=>setPasswordValue(e.target.value)}/>

        <button type='submit'>done</button>
        <p>{error}</p>
        <p>{passwordError}</p>
        <ToastContainer/>
    </div><div>
          </div>
    </form>
  )
}

export default Username
