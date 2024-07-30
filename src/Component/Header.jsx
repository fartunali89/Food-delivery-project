import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p> Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients     
and culinary expertise. our mission is to satisfy your craving and elevate your dining expertise, one delicious meal at a time</p>
      <button>View Food</button>
      </div>
      
      
    </div>
    
  )
}
const foodList = [
  { name: 'Pizza', description: 'Cheesy and delicious', price: '$12.99' },
  { name: 'Burger', description: 'Juicy and savory', price: '$8.99' },
  { name: 'Sushi', description: 'Fresh and tasty', price: '$15.99' },
];

export default Header
