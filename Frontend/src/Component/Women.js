import React, { useEffect, useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "../CSS/Women.css";
import axios from "axios";

const Women = () => {
  const [women, setWomen] = useState([]);

  const gettowomenImages = () => {
    axios
      .get("http://127.0.0.1:8000/dress/")
      .then((res) => {
        debugger;
        setWomen(res.data);
      })
      .catch((error) => {
        console.log("eror");
      });
  };

  useEffect(() => {
    gettowomenImages();
  }, []);
  return (
    <div>
      <div>
        <img
          className="img"
          src="https://www.sonarajputiposhak.com/wp-content/uploads/2023/03/yuvti_Banner_1_1400x.webp"
          alt="Banner 1"
          style={{ marginTop: "70px", width: "100%", height: "auto" }}
        />
        <button
          className="butonshop"
          style={{
            position: "absolute",
            top: "63%",
            left: "73%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            paddingLeft: "20px",
            zIndex: "1",
            width: "157px",
          }}
        >
          Shop Now
          <ArrowRightAltIcon style={{ marginLeft: "20px" }} />
        </button>
      </div>

      <div className="container1">
        <p className="p">POSHAKS</p>
      </div>
      <div className="card1-container">
        {women.map((option) => (
          <>
            {option.type == "poshak" && (
              <div className="card1" key={option.id}>
                {option.image ? (
                  <img
                    src={`http://127.0.0.1:8000${option.image}`}
                    alt={option.name || "Dress"}
                  />
                ) : (
                  <p>No image available</p>
                )}
                <div className="card1-text">
                  {/* <p>{option.description}</p> */}
                  <p>{option.name}</p>
                  <p>{option.type}</p>
                  <p>₹{option.price}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      {/* <div className="card1-container">
        <div className="card1">
          <img
            src="https://i.pinimg.com/236x/1d/28/fe/1d28fe5705669aa60d50b8ed76b8d8c1.jpg"
            alt="Image 1"
          />
          <div className="card1-text">DEVANYA POSHAK</div>
          <div className="card1-text">₹9150.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-11-09-at-115638-am-683237_m.jpeg?v=503"
            alt="Image 2"
          />
          <div className="card1-text">LADESAR POSHAK</div>
          <div className="card1-text">₹4650.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-10-16-at-32823-pm-576135_m.jpeg?v=503"
            alt="Image 3"
          />
          <div className="card1-text">SHASHI POSHAK</div>
          <div className="card1-text">₹1599.00</div>
        </div>
      </div> */}
      <div className="container1">
        <p className="p">SAREE'S</p>
      </div>

      <div className="card1-container">
        {women.map((option) => (
          <>
            {option.type == "sare" && (
              <div className="card1" key={option.id}>
                {option.image ? (
                  <img
                    src={`http://127.0.0.1:8000${option.image}`}
                    alt={option.name || "Dress"}
                  />
                ) : (
                  <p>No image available</p>
                )}
                <div className="card1-text">
                  <p>{option.name}</p>
                  <p>{option.type}</p>
                  <p>₹{option.price}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Women;
