import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebaseConfig";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import axios from "axios";

const HomeScreen = () => {
  const history = useNavigate();
  const [dress, setDress] = useState([]);
  const [jewellery, setJewellery] = useState([]);

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };

  // const  addToCart=()=>{
  //   axios
  //   .post('/', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  const gettoimages = () => {
    axios
      .get("http://127.0.0.1:8000/dress/")
      .then((response) => {
        setDress(response.data);
        debugger;
      })
      .catch((error) => {
        console.log("Error fecthing data:", error);
      });
  };

  useEffect(() => {
    gettoimages();
    gettojewellery();
  }, []);

  const gettojewellery = () => {
    axios
      .get("http://127.0.0.1:8000/jewellary/")
      .then((response) => {
        // debugger
        setJewellery(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  return (
    <>
      <div>
        <img
          className="img"
          src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/home-banners/homepage-main-banner-620939_l.png?v=503?v=1"
          alt="Banner 1"
          style={{ marginTop: "70px" }}
        />
        <img
          className="img1"
          src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/home-banners/offer-banner-898564_l.png?v=503?v=1"
          alt="Banner 2"
        />
      </div>

      <div className="container">
        <div className="card">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/categories/category-banner---half-poshaks---mobile-637854_s.png?v=503?1427392910"
            alt="Card 1"
          />
          <h3>HAMRAI POSHAKS</h3>
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
        <p className="p">POSHAKS</p>
      </div>
      <div className="card1-container">
        {dress.map((option) => (
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

      <div className="container1">
        <p className="p">RAJPUTI SUITS</p>
      </div>

      <div className="container1">
        <p className="p">SAREE'S</p>
      </div>

      <div className="card1-container">
        {dress.map((option) => (
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

      <div className="container1">
        <p className="p">JEWELLERY</p>
      </div>

      <div className="card1-container">
        {jewellery.map((jewellery) => (
          <div className="card1" key={jewellery.id}>
            <img
              src={`http://127.0.0.1:8000${jewellery.image}`}
              alt={jewellery.name || "Dress"}
            />
            <div className="card1-text">
              <p>{jewellery.name}</p>

              <p>₹{jewellery.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
