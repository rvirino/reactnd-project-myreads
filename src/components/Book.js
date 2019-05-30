import React from 'react'

class Book extends React.Component {
    changeBookShelf = event => {
        this.props.moveBookToShelf(this.props.book, event.target.value);
    };

    render() {
        const { book } = this.props;
        const noCoverThumb = 'http://via.placeholder.com/128x188?text=No%20Cover';
        const bookCover = book.imageLinks ? book.imageLinks.thumbnail : noCoverThumb;
        const title = book.title ? book.title : 'No title available';
        const authors = book.authors ? book.authors.join(", ") : "Author Unknown";

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        backgroundImage: `url("${bookCover}")`
                    }} />
                    <div className="book-shelf-changer">
                        <select onChange={this.changeBookShelf} value={book.shelf}>
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book