import { Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import ShelfTails from "./ShelfTails"
import React from 'react'
import './App.css'

class Shelf extends React.Component {
    state = {
        books: [],
        currentlyReadingBooks: [],
        wantReadBooks: [],
        readBooks: [],
        changeShelfBooks: (book, shelf) => {
            BooksAPI.update(book, shelf).then(() => this.refreshData())
        }
    }

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books,
                currentlyReadingBooks: books.filter(book => book.shelf === "currentlyReading"),
                wantReadBooks: books.filter(book => book.shelf === "wantToRead"),
                readBooks: books.filter(book => book.shelf === "read")
            });
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ShelfTails changeShelfBooks={this.state.changeShelfBooks} books={this.state.currentlyReadingBooks} title="Currently Reading"></ShelfTails>
                        <ShelfTails changeShelfBooks={this.state.changeShelfBooks} books={this.state.wantReadBooks} title="Want to Read"></ShelfTails>
                        <ShelfTails changeShelfBooks={this.state.changeShelfBooks} books={this.state.readBooks} title="Read"></ShelfTails>
                        {/* <div className="lds-ring"><div></div><div></div><div></div><div></div></div> */}
                    </div>
                </div>
                <Link to='/search'>
                    <div className="open-search"><button></button></div>
                </Link>
            </div>
        );
    }
}

export default Shelf