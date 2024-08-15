import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from './App.jsx'
import "./App.css"
import About from './pages/about.jsx';
import NotFound from './pages/notfound.jsx';
import Product from './pages/product.jsx';
import Cart from './pages/cart.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<App />}>
      </Route>
      <Route path="/about" element ={<About/>} >
      </Route>
      <Route path="/product" element ={<Product/>} >
      </Route>
      <Route path="/cart" element ={<Cart/>} >
      </Route>
      <Route path="*" element ={<NotFound/>} >
      </Route>
    
    </Routes>
  </BrowserRouter>
)
