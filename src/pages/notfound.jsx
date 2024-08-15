import Header from "../layouts/header";
import { Link } from "react-router-dom";
import Footer from "../layouts/footer";


const NotFound = ()=>{




    return(
        <>
        <Header />
        <div className="notfound-container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">404!!  This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link to="/" >
          <button>Back to home <i className="far fa-hand-point-right"></i></button>
        </Link>
      </div>
    </div>
    

  </>
    )







}

export default NotFound;