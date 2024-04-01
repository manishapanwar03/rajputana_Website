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
    axios.get("http://127.0.0.1:8000/jewellary/").then((response) => {
      setJewellery(response.data);
    })
    .catch((error)=>{
      console.log("Error fetching data:",error);
    })
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

      {/* threee card img  POSHAKS*/}
      <div className="container1">
        <p className="p">POSHAKS</p>
      </div>
      <div className="card1-container">
        <div className="card1">
          {dress.map((option) => {
            // let baseURL = "http://127.0.0.1:8000/";
            // let im age = baseURL + option.image;
            return (
              <li key={option.id}>
                {option.image ? (
                  <img
                    src={`http://127.0.0.1:8000${option.image}`}
                    alt="Dress"
                  />
                ) : (
                  <p>No image available</p>
                )}
                <div className="card1-text">{option.description}</div>

                <div className="card1-text">{option.name}</div>
                <div className="card1-text">{option.type}</div>
                <div className="card1-text">{option.price}</div>
              </li>
            );
          })}
        </div>
      </div>

      <div className="card1-container">
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-08-20-at-10002-pm-793575_m.jpeg?v=503"
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
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/proQkjhgfdsa555uuup[=q 
            xzxziuytrew  ducts/whatsapp-image-2023-10-16-at-32823-pm-576135_m.jpeg?v=503"
            alt="Image 3"
          />
          <div className="card1-text">SHASHI POSHAK</div>
          <div className="card1-text">₹1599.00</div>
        </div>
      </div>

      {/* threee card img RAJPUTI Suits*/}
      <div className="container1">
        <p className="p">RAJPUTI SUITS</p>
      </div>

      <div className="card1-container">
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-07-03-at-61308-pm-2-726151_m.jpeg?v=503"
            alt="Image 1"
          />
          <div className="card1-text">SHAACHI SUIT</div>
          <div className="card1-text">₹1120.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-09-17-at-121547-pm-1-714437_m.jpeg?v=503"
            alt="Image 2"
          />
          <div className="card1-text">VATIKA SUIT</div>
          <div className="card1-text">₹849.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-05-02-at-44229-pm-696123_m.jpeg?v=503"
            alt="Image 3"
          />
          <div className="card1-text">MADHU SUIT</div>
          <div className="card1-text">₹2950.00</div>
        </div>
      </div>

      {/* threee card img Saree*/}
      <div className="container1">
        <p className="p">SAREE'S</p>
      </div>

      <div className="card1-container">
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-01-21-at-124205-pm-3-321395_m.jpeg?v=503"
            alt="Image 1"
          />
          <div className="card1-text">GOLDEN ROSE SAREE</div>
          <div className="card1-text">₹2850.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-01-13-at-30103-pm-423558_m.jpeg?v=503"
            alt="Image 2"
          />
          <div className="card1-text">RIDE ROSE</div>
          <div className="card1-text">₹415.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-26-at-112535-am-1-580770_m.jpeg?v=503"
            alt="Image 3"
          />
          <div className="card1-text">NAVRANG SAREE</div>
          <div className="card1-text">₹675.00</div>
        </div>
      </div>

      {/* threee card img Jewellery*/}
      <div className="container1">
        <p className="p">JEWELLERY</p>
      </div>

      <div className="card1-container">
        <div className="card1">
          {jewellery.map((jewellery)=>{
            return(
              <>
              <li><img src={jewellery.image}/></li>
              </>
            )

          })}
          {/* <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-26-at-10123-pm-754508_m.jpeg?v=503"
            alt="Image 1"
          />
          <div className="card1-text">RAINA KANTHI SET</div>
          <div className="card1-text">₹199.00</div> */}
        </div>
        {/* <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-23-at-51607-pm-560546_m.jpeg?v=503"
            alt="Image 2"
          />
          <div className="card1-text">SOORAJ JADAU RING</div>
          <div className="card1-text">₹149.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2022-12-23-at-51607-pm-560546_m.jpeg?v=503"
            alt="Image 3"
          />
          <div className="card1-text">BINDI MEHRI</div>
          <div className="card1-text">₹249.00</div>
        </div> */}
      </div>
    </>
  );
};

export default HomeScreen;
