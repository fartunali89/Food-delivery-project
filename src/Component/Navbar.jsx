import React, { useState } from 'react'
import './Navbar.css'

 
const Navbar = () => {
  const[Food,setFood] = useState("home");
  return (
    <div className='navbar'>

      <img src='src/assets/images/res-logo.png' alt=''  className='logo'/>
      
      <ul className='navbar-menu'>
      <li onClick={()=>setFood("Home")} className={Food==="Home"? "active":""}>Home</li>
      <li   onClick={()=>setFood("Food")}className={Food==="Food"? "active":""}>Food</li>
      <li  onClick={()=>setFood("Cart")}className={Food==="Cart"? "active":""}>Cart</li>
      <li  onClick={()=>setFood("Contact")}className={Food==="Contact"? "active":""}>Contact</li>
      </ul>
      <div className='navbar-right'>
        <img src='src\assets\images\search_icon.png' alt=''/>
        <div className='navbar-search-icon'>
          <img src='src\assets\images\basket_icon.png' alt=''/>
          <div className='dot'></div>
          </div>
          <button>sign in</button>
      </div>
      </div>
      
   
     
    
    
  )
}

export default Navbar;
