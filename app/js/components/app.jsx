import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '@/reducers';
import Home from './home';

import 'app/scss/base/base';
import './sprite';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
	}
}

export default App;

