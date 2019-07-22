import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import ShelfTails from "./ShelfTails"
import React from "react"
import "./App.css"

class Search extends React.Component {
    state = {
        changeShelfBooks: (book, shelf) => {
            BooksAPI.update(book, shelf)
        },
        queryResults: [],
    }

    doTheSearch(query) {
        if (query === '') {
            this.setState({
                queryResults: []
            })
        } else {
            BooksAPI.search(query).then(booksSearch => {
                if (booksSearch.error) {
                    this.setState({
                        queryResults: []
                    })
                } else {
                    /* BooksAPI.getAll().then((booksInShelf) => {
                        booksSearch = booksInShelf.map((bookInShelf) => {
                            var bookSearchNew = booksSearch.map((bookInSearch) => {
                                if (bookInShelf.id === bookInSearch.id) {
                                    bookInSearch.shelf = bookInShelf.shelf;
                                }
                            })
                            return bookSearchNew;
                        })
                        
                    }) 
                    ** CONSEGUI ATUALIZAR O SHELF DOS LIVROS, PORÉM, NÃO SEI COMO RETORNAR A ARRAY ATUALIZADA
                    DESSE JEITO O SHELF SEMPRE FICA EM NONE PARA LIVROS QUE APARECEM NA PESQUISA
                    */
                    this.setState({
                        queryResults: booksSearch
                    })
                }
            });
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <div className="close-search"></div>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={(event) => this.doTheSearch(event.target.value)} type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ShelfTails changeShelfBooks={this.state.changeShelfBooks} books={this.state.queryResults} title="Search results:"></ShelfTails>
                </div>
            </div>
        );
    }
}

export default Search