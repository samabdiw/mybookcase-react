import React from 'react';
import { Link } from 'react-router-dom'

function About() {
    return (
        <React.Fragment>
            <div className="aboutUs">
        <div className="hero-text">
          <h1>Welcome to my Bookshop</h1>
          <p>Welcome to my Bookcase App! A world of wonderful reads. </p>
            <p>Click on the Add button to save a book to your bookcase. Use the search bar to search by name, author and description</p>
        <Link to="/" className="aboutButton">
            <button className="aboutButton">Search for a book!</button>
        </Link>
      </div>
      </div>
        </React.Fragment>
    )
}

export default About