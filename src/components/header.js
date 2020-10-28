import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div>
      <h1>My Bookcase</h1>
      <Link to="/">Home</Link>
      <Link to="/bookcase" className="book-link">
        Bookcase
      </Link>
      <Link to="/about" className="about-link">
        About
      </Link>
    </div>
  );
};

export default Header;