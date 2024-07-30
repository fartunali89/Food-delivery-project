import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/images/assets';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {

  const [Food, setFood] = useState("Home")

  return (
    <div className='navbar'>
      < img src={assets.logo} alt='logo' className='logo' />
      <ul className='navbar-menu'>
        < Link to='/' onClick={() => setFood("Home")} className={Food === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-f' onClick={() => setFood("Food")} className={Food === "Food" ? "active" : ""}>Food</a>
        <a href='#cart' onClick={() => setFood("Cart")} className={Food === "Cart" ? "active" : ""}>Cart</a>
        <a href='#login' onClick={() => setFood("Contact")} className={Food === "Contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className='navbar-right'>
        < img src='/src/assets/images/search_icon.png' alt='search' />



        <button onClick={()=>setShowLogin(true)}>sign in</button>

      </div>

    </div>
  );

}

export default Navbar