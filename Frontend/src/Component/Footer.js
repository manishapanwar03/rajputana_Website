import React from "react";
import "../CSS/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Shop Non-Stop on Rajput collection</h1>
          <p>
            Trusted by more than 1 Crore Indians Cash on Delivery | Free
            Delivery
          </p>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Contact</h2>

            <address>
            388, 1st Floor, Pu4, Scheme Number 54, In front of Retina
                    Speciality Hospital, Vijay Nagar, Indore, Madhya Pradesh,
                    452010
              <br />
              <a className="footer__btn" href="mailto:example@gmail.com">
                Email Us
              </a>
            </address>
          </li>
          <li>
            <h5>Reach out to us</h5>
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color:"black"}} /> */}
          </li>
        </ul>

      
      </footer>
    </div>
  );
};

export default Footer;
