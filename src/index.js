import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import './fonts/GalanoGrotesque/GalanoGrotesqueExtraBold.otf';
import './fonts/GalanoGrotesque/GalanoGrotesqueBold.otf';
import './fonts/Newzald/TestNewzald-Bold.otf';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
