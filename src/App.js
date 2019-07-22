import { Switch, Route } from "react-router-dom"
import Search from './Search'
import Shelf from './Shelf'
import React from 'react'
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
