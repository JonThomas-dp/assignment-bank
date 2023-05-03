import { BrowserRouter, NavLink } from "react-router-dom";

import "../styles/navbar.css"

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

export default function NavBar() {
  return(
    <div className="nav-bar">
        <div className="nav-bar-left">
          <NavLink className="change-to-NavLink" to="/">LOGO</NavLink>
        </div>
        <div className="nav-bar-right">
          <div className="nav-bar-link-container">
            <NavLink className="change-to-NavLink" to="/">HOME</NavLink>
            <NavLink className="change-to-NavLink" to="/products">PRODUCTS</NavLink>
            <NavLink className="change-to-NavLink" to="/cart">CART</NavLink>
            <NavLink className="change-to-NavLink" to="/contact">CONTACT</NavLink>
            <NavLink className="change-to-NavLink" to="/about">ABOUT</NavLink> 
          </div>
        </div>
      </div>
  )
}