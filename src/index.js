import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/Abel-Regular.ttf';
import './assets/fonts/Modak-Regular.ttf';
import './assets/fonts/UnicaOne-Regular.ttf';
import './assets/fonts/Righteous-Regular.ttf';
import './assets/fonts/VT323-Regular.ttf';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
