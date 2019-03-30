import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'
import '../css/App.scss';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   };
  // }

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveBookToShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact
          render={() => (
            <div>
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <BookList books={this.state.books} moveBookToShelf={this.moveBookToShelf} />
            </div>
          )} />

        <Route path="/search"
          render={({ history }) => (<Search
            moveBookToShelf={this.moveBookToShelf}
            history={history}
            books={this.state.books} />)} />
      </div>
    )
  }
}

export default App