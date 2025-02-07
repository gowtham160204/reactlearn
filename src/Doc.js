import React, { useEffect, useState } from 'react'
import Footer from './common/Footer'
import Header from './common/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Username from './Username';
import { ToastContainer, toast } from 'react-toastify';
import { MdDoubleArrow } from "react-icons/md";
import"./Doc.scss";
import Kpy from './Kpy';



function Doc() {
  const[navb,setNavb]=useState(true)
  const[input,setInput]=useState(localStorage.getItem('username'))
  const[password,setPassword] = useState(localStorage.getItem('password'))
  useEffect(() => {
    toast.success("user id  :"+input)
    toast.success("password :"+password)
  },[])
  const clbtn= () =>{
   setNavb(!navb)
  }
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1


  };
  return (
    <div>
      <Kpy name ="manager" />
      <Header/>
      <button onClick={clbtn}>
      <MdDoubleArrow  className='icon'/>
      </button>
      
      {navb ?
        <div>
      <nav className='nav'>
      <label>login</label>
      <label>account details</label>
      <label>orders</label>
      <label>settings</label>
      <label>help</label>
      </nav>
      </div>
      :null
      }
      <label>{input}</label><br></br>
      <label>{password}</label>
      <form>
        <label>Username:</label>
        <input type='text'></input>
        <label>Password:</label>
        <input type='password'></input>
        <button>login</button>
      </form>
      <Footer/>
      <Slider {...settings}>
        
      <div>
        <img></img>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    <ToastContainer />
    </div>
  )
}

export default Doc