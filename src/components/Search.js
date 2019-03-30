import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import DebounceInput from 'react-debounce-input';

class Search extends React.Component {
    state = {
        searchResults: [],
    }

    getBooks = event => {
        const typedValue = event.target.value;
        if (typedValue) {
            BooksAPI
                .search(typedValue.trim(), 20)
                .then(searchResults => {
                    if (searchResults.length > 0) {
                        searchResults = searchResults.map((book) => {
                            const bookOnShelf = this.props.books.find(item => item.id === book.id);
                            book.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
                            return book;
                        });
                        this.setState({ searchResults })
                    }
                    else {
                        this.setState({ searchResults: [] });
                    }
                });
        }
        else {
            this.setState({ searchResults: [] });
            return;
        }

    };

    render() {
        const { searchResults } = this.state;
        const booksFound = searchResults;
        const moveBookToShelf = this.props.moveBookToShelf;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={3}
                            debounceTimeout={300}
                            element="input"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.getBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksFound.length > 0 && (
                            <div>
                                <h3>Search returned {booksFound.length} books </h3>
                                <ol className="books-grid">
                                    {booksFound.map(book => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                moveBookToShelf={moveBookToShelf}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search