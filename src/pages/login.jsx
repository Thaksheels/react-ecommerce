import { useState } from "react";
import axios from "axios";




const Login = ()=>{
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  
  const handleLoginSubmit = async(event)=>{
    event.preventDefault()
    const body = {username:username,password:password}
    console.log(username,password);
    axios.post("/api/api/token/",body).then((res)=>localStorage.setItem('token', res.data.access)
    
    ).catch((err)=>console.log(err)
    )

    


  }



    return(
        <>
        
        <div className="login-page">
  <div className="form">
    <form className="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className="login-form" onSubmit={handleLoginSubmit}>
      <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="password"onChange={(e) => setPassword(e.target.value)}/>
      <button >login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
        
        
        
        
        
        
        </>
    )

}

export default Login;