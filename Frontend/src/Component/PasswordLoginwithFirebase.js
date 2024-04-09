import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Home";
import RegisterAndLogin from "../RegisterAndLogin";
import "../CSS/PasswordLoginwithFirebase.css";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Women from "./Women";
import Men from "./Men";
import Jeweelry from "./Jeweelry";
import Login from "./Login";
import Signup from "./Signup";
import Kids from "./Kids";

const PasswprdLoginwithfirebase = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          {/* <Route path='/' element={<RegisterAndLogin />} /> */}

          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/jeweelry" element={<Jeweelry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/kids" element={<Kids/>}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default PasswprdLoginwithfirebase;
