import React from "react";
import { Link } from "react-router-dom";

const Bookcase = () => {
  return (
    <div className="bookcase-header">
      <h1>My Booklist</h1>
      <div className="bookcase-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <h3>I have read [] books</h3>
    </div>
  );
};

export default Bookcase;