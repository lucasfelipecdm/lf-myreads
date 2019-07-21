import React from 'react'
import Shelf from './Shelf'
import Search from './Search'
import { Switch, Route } from "react-router-dom";


// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Shelf} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
