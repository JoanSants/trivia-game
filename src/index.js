import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.sass';
import App from './App';
import { store } from './createStore';

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById('root')
);
