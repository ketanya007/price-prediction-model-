import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/NavBar.css";

function NavBar(props) {
  console.log("PROPS"+props.isLogin);
  const [click, setClick] = useState(false);
  
  
  // console.log(userExists);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setClick(!click);
    props.setIsLogin(false)
    // setUser(false);
  }
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          PriceWise &nbsp;
          <i class='fas fa-house-user'></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
    

            <li className="nav-item">
              <NavLink
                exact
                to="/Predict"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Predict
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Team"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Our Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/avlhouse"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Available House
              </NavLink>
            </li>
            {
              props.isLogin &&  <li className="nav-item">
              <NavLink
                exact
                to="/AddHouse"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add House
              </NavLink>
            </li>
            }
            
            <li className="nav-item">
              {
                props.isLogin?<NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
               Logout
              </NavLink>:<NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Login/SignUp
              </NavLink>
              }
              
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
