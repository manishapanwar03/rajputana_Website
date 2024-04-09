import React, { useState } from "react";
import "../CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const Navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleLogin(e) {
    e.preventDefault();
    if (email === "" && password === "") {
      alert("Please Fill Your Email and Password");
    } else if (email === "") {
      alert("Email is Required!Please Fill Your Email");
    } else if (password === "") {
      alert("Password is Required!Please Fill Your Password");
    } else {
      let data = new FormData();

      data.append("email", email);
      data.append("password", password);

      axios
        .post("http://127.0.0.1:8000/login/", data)
        .then((res) => {
          debugger;
          localStorage.setItem("token", res.data.access);
          Navigate("/home");
        })
        .catch((err) => {                                                                                                                                                                                                                      
          console.log(err);
          alert("Your email and password Invalid,please try agian.");
        });
    }
  }

  function handleSignup(e) {
    axios.post("http://127.0.0.1:8000/singup/").then((response) => {
      debugger
      setName(response.data);
    });
  }

  return (
    <div>
      {/* <div className="login-page">
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
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePassword}
            />
            <button className="btn btn-outline-dark" onClick={handleLogin}>
              <Link to="/dashbroad" style={{ textDecoration: "none" }}></Link>
              login
            </button>

            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div> */}
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true" className="label">
              Sign up
            </label>
            <input
              type="email"
              name="txt"
              placeholder="User name"
              required=""
              value={name}
              onChange={handleName}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={handleEmail}
              className="input"
            />
            <input
              type="email"
              name="pswd"
              placeholder="Password"
              required=""
              value={password}
              onChange={handlePassword}
              className="input"
            />
            <button style={{ background: "#e0dede" }} onClick={handleSignup} className="button">Sign up</button>
          </form>
        </div>

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true" className="label">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={handleEmail}
              className="input"
            />
            <input
              type="email"
              name="pswd"
              placeholder="Password"
              required=""
              value={password}
              onChange={handlePassword}
              className="input"
            />
            <button style={{ background: "#e0dede" }} onClick={handleLogin} className="button">
              <Link to="/home" style={{ textDecoration: "none" }}>
                {" "}
              </Link>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
