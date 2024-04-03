import React from "react";
import { Link } from "react-router-dom";
// import './CSS/navbar.css';
import "../CSS/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Navbar() {
  return (
    <>
      {/* <header className="header">
        <Link href="/" className="logo">fashion</Link>

        <nav className="navbar">
        <Link to='/'>Home</Link>
          <Link to='/about'></Link>
          <Link to='/girls'>Girls</Link>
          <Link to='/boys'>Boys</Link>
          <Link to='/contact'>Contact</Link> 
          <Link className='Sign'  >SignOut</Link>
          
        </nav>
      </header> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <Link className="navbar-brand" to='/' style={{color: "#780035" ,cursor:"pointer"}}>
          Fashion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" style={{cursor:"pointer"}}>
              <Link className="nav-link" to="/" >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/women">
                Women Ethnic <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/men">
                Men<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/kids">
                Kids<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/jeweelry">
                Jewellery & Accessories<span className="sr-only">(current)</span>
              </Link>
            </li>

            {/* <li className="nav-item active">
              <Link className="nav-link" href="#">
                Women Ethnic
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Men
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="#">
                Kids
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Jewellery & Accessories
              </Link>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <Link to="/login">
          <PersonOutlineIcon style={{height:"50px"}}/>
          </Link>
          <Link>
          
          <AddShoppingCartIcon style={{marginRight:"20px",height:"50px"}}/>
          </Link>
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
