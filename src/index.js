import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './createStore';

import './index.css';
import App from './App';

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/' exact={true} component={App} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById('root')
);
