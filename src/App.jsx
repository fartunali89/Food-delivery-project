import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Component/Footer';
import Placeorder from './Pages/Placeorder';
import Loginp from './Component/Loginp';


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Loginp setShowLogin={setShowLogin} /> : <></>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
          
        </Routes>
       </div>
      <Footer />
    </>
  );
}

export default App;