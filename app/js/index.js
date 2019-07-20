import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'svgxuse';

import App from './components/app';


const root = document.getElementById('app');

const render = Component => {
	ReactDom.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		root
	)
};

render(App);

if (module.hot) {
	module.hot.accept('./components/app', () => {
		// if you are using harmony modules ({modules:false})
		render(App)
		// in all other cases - re-require App manually
		render(require('./components/app'))
	})
}
