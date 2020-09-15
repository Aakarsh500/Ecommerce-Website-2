import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <button className="logo">Logo :)</button>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          Contact
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/signIn">
          Sign in
        </Link>
      </div>
    </div>
  );
};
export default Header;
