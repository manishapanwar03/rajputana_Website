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
        {women.map((women) => (
          <div className="card1">
            <div className="card-text">
              <p>{women.type}</p>
              <img src={`http://127.0.0.1:8000${women.image}`} />
            </div>
          </div>
        ))}
        {/* <div className="card1">
          <img
            src="https://i.pinimg.com/550x/5a/5a/a9/5a5aa96d83eafca73ee3408708433428.jpg"
            alt="Image 1"
          />
          <div className="card1-text">BHAGYASHREE POSHAK</div>
          <div className="card1-text">₹1950.00</div>
        </div>
        <div className="card1">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2021/8/LS/NS/UQ/134157838/product-500x500.jpg"
            alt="Image 2"
          />
          <div className="card1-text">BHAGYASHREE POSHAK</div>
          <div className="card1-text">₹1950.00</div>
        </div>
        <div className="card1">
          <img
            src="https://cdn.shopaccino.com/ranisa-rajputi-fashion/products/whatsapp-image-2023-10-16-at-32823-pm-576135_m.jpeg?v=503"
            alt="Image 3"
          />
          <div className="card1-text">TULSI POSHAK</div>
          <div className="card1-text">₹2950.00</div>
        </div> */}
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
    </div>
  );
};

export default Women;
