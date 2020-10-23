import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    // let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
    const info = props.book.volumeInfo;
    // const { volumeInfo: { description } } = props.book;
    const { volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book;

    const renderAmount = () => {
        if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.listPrice.amount) {
            return '£' + props.book.saleInfo.listPrice.amount
        }
        return 'No price available' ;
    }

    const renderAuthors = () => {
        if (authors.length === 1) {
            return authors;
        }
        return authors.map(author => author + ',');
    }


    return (
        <div>
            {/* <img src={thumbnail} /> */}
            <h2>{title} - {renderAuthors}</h2>
            <p>{renderAmount}</p>
            <p>{description}</p>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
        volumeInfo: PropTypes.shape({
            title:PropTypes.string.isRequired,
            authors: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.string.shape({
                thumbnail: PropTypes.string.isRequired,
            })
        }),
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number.isRequired
            }).isRequired
        })
    })
};

export default Book;
