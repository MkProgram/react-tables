import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render( <App />, document.getElementById('app'));

document.querySelector('canvas').addEventListener('mousedown', e => e.preventDefault() );