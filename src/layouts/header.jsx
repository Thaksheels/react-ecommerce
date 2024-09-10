import { Link } from "react-router-dom";



const Header= ()=>{ 

return (
<header>
  <div className="header-container">
    <div className="wrapper">
      <div className="logo">
        <a href="#">
            <img src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" style={{ width:"50px",height:"50px" }} />
          
        </a>
      </div>
      <div className="header-links d-flex">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/product">Product</Link></li> 
          <li><Link to="/services" >Services</Link></li>
          <li><Link to="/blog" >Blog</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          <li><Link to="/login" >login</Link></li>
        </ul>
        <a href="#" className="primary_btn">Button</a>
      </div>
    </div>
  </div>
</header>
)

}
export default Header;