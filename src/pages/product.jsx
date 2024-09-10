import Header from "../layouts/header";
import { Link } from "react-router-dom";
import Footer from "../layouts/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../utils/httpInterceptor";
import * as React from "react"


const initialState=[];



const Product = ()=>{
  const [product,setProduct]=useState(initialState)
  useEffect(()=>{
    axiosInstance.get("/shop/productlist/").then((res)=>setProduct(res.data.product)
    ).catch((err)=>console.log(err)
    )

  },[])
  const handleAddToCart = (pid)=>{
    const product = pid;
    const quantity = 1;
    axiosInstance.post("/shop/addcart/",{product,quantity}).then((val)=>console.log(val)
    );




  }



return(
<>
<Header />
<div className="product-container">
{product && Array.isArray(product) && product.map((val, index) => (
  <React.Fragment key={index}>
    <div className="product-card">
      <img src={"/api/"+val.image} style={{width:"100%"}}/>
      <h1>{val.name}</h1>
      <p className="price">{val.price}</p>
      <p>{val.description}.</p>
      <Link to="/cart"><button onClick={()=>handleAddToCart(val.id)}>Add to Cart</button></Link>
    </div>
  </React.Fragment>
))}

</div>



<Footer />













</>






)





}

export default Product;