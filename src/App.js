import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Updatedb from './components/updatedb/updatedb';
import APOD from './components/apod/apod';


export default class App extends Component {
  updatedb = () => {
    console.log('This is from new function.')
  }

  render() {
    return (
      <div className="App" >
        <APOD></APOD>

        <Router>
          <Link to="/updatedb"></Link>
          <Switch>
            <Route exact path="/updatedb">
              <Updatedb></Updatedb>
            </Route>
          </Switch>
        </Router>
      </div>


    );
  }
}

