import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Component/StoreContext.jsx'
import Home from './Pages/Home.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <StoreContextProvider>
      <Home/>
     
     </StoreContextProvider>
    
    </BrowserRouter>
  
   
  </React.StrictMode>,
)
