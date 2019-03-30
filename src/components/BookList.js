import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

function BookList(props) {
    const { moveBookToShelf } = props;
    const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = props.books.filter((book) => book.shelf === 'wantToRead')
    const read = props.books.filter((book) => book.shelf === 'read')

    return (
        <div className="list-books">
            <div className="list-books-content">
                <Shelf
                    bookShelfTitle='Currently Reading' d
                    bookshelfBooks={currentlyReading}
                    moveBookToShelf={moveBookToShelf}
                />
                <Shelf
                    bookShelfTitle='Want to Read'
                    bookshelfBooks={wantToRead}
                    moveBookToShelf={moveBookToShelf}
                />
                <Shelf
                    bookShelfTitle='Read'
                    bookshelfBooks={read}
                    moveBookToShelf={moveBookToShelf}
                />
            </div>

            <Link to="/search" className="open-search">Add a book</Link>

        </div>
    )
}
export default BookList