import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "../CSS/Women.css";
import axios from "axios";

const Women = () => {
  const [dress, setDress] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/dress/").then((response) => {
      setDress(response.data);
    });
  });
  return (
    <div>
      {/* <div
        style={{
          backgroundImage: `url("https://www.sonarajputiposhak.com/wp-content/uploads/2023/03/yuvti_Banner_1_1400x.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          marginTop: "0px",
        }}
      >
        <div
          style={{
            // backgroundColor: "#000000a3",
            height: "642px",
            display: "flex",
            justifyContent: "end",
            width: "80%",
            marginTop: "14px",
            alignItems: "end",
          }}
        >
          <button
            className="butonshop"
            style={{ textAlign: "center", paddingLeft: "20px" }}
          >
            Shop Now
            <ArrowRightAltIcon style={{ marginLeft: "20px" }} />{" "}
          </button>
        </div>
      </div> */}
      <div>
        <img
          className="img"
          src="https://www.sonarajputiposhak.com/wp-content/uploads/2023/03/yuvti_Banner_1_1400x.webp"
          alt="Banner 1"
          style={{ marginTop: "70px" }}
        />
      </div>
      <div className="container1">
        <p className="p">POSHAKS</p>
      </div>

      <div className="card1-container">
        {dress.map((option) => {
        if(option.type=="poshak"){

          return (
            <div className="card1" key={option.id}>
              <>
              <div className="card1-text"><img src={`http://127.0.0.1:8000${option.image}`}/></div>
                <div className="card1-text">{option.type}</div>
                <div className="card1-text">{option.price}</div>
              </>
            </div>
          );
        }
        })}
      </div>
      <div className="container1">
        <p className="p">SAREE'S</p>
      </div>

      <div className="card1-container">
        {dress.map((option) => {
        if(option.type=="sare"){

          return (
            <div className="card1" key={option.id}>
              <>
              <div className="card1-text"><img src={`http://127.0.0.1:8000${option.image}`}/></div>
                <div className="card1-text">{option.type}</div>
                <div className="card1-text">{option.price}</div>
              </>
            </div>
          );
        }
        })}
      </div>
    </div>
  );
};

export default Women;
