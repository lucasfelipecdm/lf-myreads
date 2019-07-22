import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import ShelfTails from "./ShelfTails"
import React from "react"
import "./App.css"

class Search extends React.Component {
    state = {
        query: '',
        queryResults: []
    }

    doTheSearch(query) {
        if (query === '') {
            this.setState({
                queryResults: []
            })
        } else {
            BooksAPI.search(query).then(books => {
                if (books.error) {
                    this.setState({
                        queryResults: []
                    })
                } else {
                    this.setState({
                        queryResults: books
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
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input onChange={(event) => this.doTheSearch(event.target.value)} type="text" placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <ShelfTails books={this.state.queryResults} title="Search results:"></ShelfTails>
                </div>
            </div>
        );
    }
}

export default Search