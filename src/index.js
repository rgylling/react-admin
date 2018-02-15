import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import { Route } from 'react-router-dom';
import Test from './components/test';
import Content from './components/content';
import createHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers/navbar';


const history = createHistory()
const middleware = routerMiddleware(history)


const theme = createMuiTheme({
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary: {
			light: '#607389',
			main: '#35485c',
			dark: '#0b2132',
			contrastText: '#fff',
		},
		secondary: {
			light: '#63f2e2',
			main: '#17bfb0',
			dark: '#008e81',
			contrastText: '#000',
		},
	},
});

const store = createStore(
	combineReducers({
		open: reducers,
		router: routerReducer
	}),
	window.devToolsExtension && window.devToolsExtension(),
	applyMiddleware(middleware,thunk),
);


ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Reboot />
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<Route  path="/" component={App} />
					<Content>
						<Route path="/test" component={Test} />
					</Content>
				</div>
			</ConnectedRouter>
		</Provider>
	</MuiThemeProvider>,


 document.getElementById('root'));
registerServiceWorker();
