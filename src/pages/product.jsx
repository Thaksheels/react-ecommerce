import Header from "../layouts/header";
import { Link } from "react-router-dom";
import Footer from "../layouts/footer";



const Product = ()=>{



return(
<>
<Header />
<div className="product-container">
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/61+r3+JstZL.jpg"  style={{width:"100%"}}/>
  <h1>LAPTOP</h1>
  <p className="price">$499.99</p>
  <p>Some text about the laptop..</p>
  <p><button>Add to Cart</button></p>
</div>
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/61+r3+JstZL.jpg"  style={{width:"100%"}}/>
  <h1>LAPTOP</h1>
  <p className="price">$499.99</p>
  <p>Some text about the laptop..</p>
  <p><button>Add to Cart</button></p>
</div>
</div>



<Footer />













</>






)





}

export default Product;