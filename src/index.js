import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

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

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Reboot />
      <App />
    </MuiThemeProvider>,


 document.getElementById('root'));
registerServiceWorker();
