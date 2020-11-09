import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Search from './components/search';
import BookList from './components/Booklist';
import data from './models/books.json';
import About from './pages/about';
import Pagination from './components/pagination';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book ${title} with the id of ${id} was clicked.`);
  }

  async function findBooks(value) {
    const results = await 
    fetch( `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());
    setBooks(results.items);
  }

  return (
    <>
      <Router basename='home'>
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <BookList books={books} addBook={addBook} />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path='/About'
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <About />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path='/bookcase'
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
            </React.Fragment>
          )}
        />
      </Router>
    </>
  );
};


export default App;