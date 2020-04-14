import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/Home';
import QuizPage from './components/pages/Quiz';
import ResultPage from './components/pages/Result';

const App = () => (
	<div className='App' data-test='App'>
		<Switch>
			<Route path="/quiz" component={QuizPage} />
			<Route path="/results" component={ResultPage} />
			<Route path="/" exact component={HomePage} />
		</Switch>
	</div>
);

export default App;
