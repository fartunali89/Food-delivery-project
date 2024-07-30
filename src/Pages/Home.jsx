import { useState } from 'react';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import ExploreFoods from '../Component/ExploreFoods';
import FoodDisplay from '../Component/FoodDisplay';
import Footer from '../Component/Footer';

import Cart from './Cart';





const Home = () => {
  const [category,setCategory] = useState("All")
 
  return (
    <div className='home'>
      
      <Navbar />
      <Header/>
      <ExploreFoods category={category} setCotegory={setCategory}/>
      <FoodDisplay category={category} />
      <Cart/>
      <Footer/>
 
      
    
    
  

      
    
      

    </div>
  )
}

export default Home
