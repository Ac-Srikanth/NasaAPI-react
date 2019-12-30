import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Updatedb from './components/updatedb/updatedb.js';
import APOD from './components/apod/apod.js';

export default class App extends Component {
	updatedb = () => {
		console.log('This is from new function.');
	};

	render() {
		return (
			<div className='App'>
				<APOD />

				<Router>
					<Link to='/updatedb' />
					<Switch>
						<Route exact path='/updatedb'>
							<Updatedb />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
