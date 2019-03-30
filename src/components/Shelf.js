import React from 'react'
import Book from './Book'

function Shelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.bookshelfBooks.map((book) => {
                        return <li key={book.id}>
                            <Book book={book} moveBookToShelf={props.moveBookToShelf} />
                        </li>
                    })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelf