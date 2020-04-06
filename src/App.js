import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/Home';

const App = () => (
	<div className='App' data-test='App'>
		<Switch>
			<Route path="/" exact component={HomePage} />
		</Switch>
	</div>
);

export default App;
