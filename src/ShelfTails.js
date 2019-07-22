import React from 'react'
import './App.css'

class ShelfTails extends React.Component {   
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail : `https://via.placeholder.com/140x180`})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select
                                            defaultValue={`${book.shelf || 'none'}`}
                                            onChange={
                                                    (event)=> this.props.changeShelfBooks(book, event.target.value)
                                                }>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                                </div>
                            </li>
                        ))} 
                    </ol>
                </div>
            </div>
        );
    }
}

export default ShelfTails