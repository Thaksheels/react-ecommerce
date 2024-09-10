import Header from "../layouts/header"
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../utils/httpInterceptor";

const initialState=[];
const Cart = ()=>{
    const BASE_URL = 'http://127.0.0.1:8000';
    const [cart,setCart]=useState(initialState)
    useEffect(()=>{
      axiosInstance.get("/shop/getcart/").then((res)=>setCart(res.data.data)
      ).catch((err)=>console.log(err)
      )
  
    },[])
    const onQuantityChange = (str)=>{
        console.log("decremented successfully");
        
      

    }





    return (
        <>
        <Header />
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            
                        </div>
                    </div>  
                    {cart && Array.isArray(cart) && cart.map((val, index) => (  
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">

                            <div className="col-2"><img className="img-fluid" src = {`${BASE_URL}/${val.product.image}`}/></div>
                            <div className="col">
                                <div className="row text-muted">{val.product.name}</div>
                                <div className="row">{val.product.description}</div>
                            </div>
                            <span onClick={()=>{onQuantityChange('decrement')}}>decrement</span>
                            <div className="col">
                                <a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">&euro; {val.product.price} <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    ))}
                    

                    
                    
                    <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" style={{paddingLeft:0}}>ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row" style={{bordertop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>
        
        
        
        
        
        
        
        </>





    )

}

export default Cart;