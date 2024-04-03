import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/Jwellery.css";
const Jeweelry = () => {
  const [jewellary, setJewellery] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jewellary/").then((response) => {
      setJewellery(response.data);
    });
  });
  return (
    <>
      <div>
        <img
          src="https://www.banadi.in/uploads/home_slider/8f6dfbd34b0ab5a45bf1c791702293d3.jpg"
          style={{ width: "100%" }}
        />
         {/* <img
          className="img1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86nRRs01LXcpfQ_Zv8YKIbvLt1jYdPWfzxQ&s"
          alt="Banner 2"
        /> */}
      </div>

      <div className="container" style={{marginTop:"50px"}}>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hW2N4_8BRx9PQ8v8HjuIIcdkGOiRp8exOg&s"
            alt="Card 1"
          />
          <h3>JEWELLERY</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/categories/category-banner---jewellery-02-120890_s.png?v=503?1427392910"
            alt="Card 2"
          />
          <h3>JEWELLERY</h3>
        </div>
      </div>
      <div className="container1">
        <p className="p">JEWELLERY'S</p>
        <div className="loader"></div>
        {/* <div
          className="hr line-at-bot top-0"
          style={{ background: "black", height: "1px", width: "20%" }}
        ></div> */}
      </div>
      <div className="card1-container">
        {jewellary.map((option) => {
          return (
            <>
              <div className="card1">
                <img src={`http://127.0.0.1:8000${option.image}`} />
                <div className="card1-text">{option.category}</div>
                <div>{option.price}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Jeweelry;
