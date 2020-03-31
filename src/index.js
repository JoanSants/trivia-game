import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';

const app = (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact={true} component={App} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById('root')
);
