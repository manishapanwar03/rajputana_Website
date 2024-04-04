import React, { useState } from "react";
import "../CSS/Login.css"
const Index = () => {
 const[login,setLogin]=useState();  
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>

          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
             
            />
            <input
              type="password"
              placeholder="password"
            
            />
            <button className="btn btn-outline-dark" >
              {/* <Link to="/dashbroad" style={{ textDecoration: "none" }}></Link> */}
              login
            </button>

            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
