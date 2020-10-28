import React from 'react';
import PropTypes from 'prop-types'

const Book = (props) => {
    let {id, volumeInfo: {title, authors, description, imageLinks:{thumbnail, smallThumbnail}},
        saleInfo:{listPrice}} 
        = props.book;


    return (
    <div className='book'>
            <h2>{title}</h2>
            <h3>by {authors}</h3>
            <img src= {thumbnail || smallThumbnail} alt={title}/>
            <p>{listPrice && listPrice.amount}</p>
            <p>{description}</p>
            <button onClick={() => props.addBook(title, id)}>Add +</button>
    </div>
    );
}


Book.propTypes = {
    volumeInfo: PropTypes.shape(
        {title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        description: PropTypes.string,
        imageLinks: PropTypes.shape(
            {thumbnail: PropTypes.string, 
            smallThumbnail: PropTypes.string})
        }),
        saleInfo: PropTypes.shape({listPrice: PropTypes.shape({amount: PropTypes.number})})
   };

   Book.defaultProps ={
       authors: "No Known Authors"
   }
   
export default Book;
