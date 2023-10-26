

import React from 'react';
import ReactDOM from 'react-dom';

import App from './dashboard';



if (typeof window !== 'undefined') {
  ReactDOM.render(<App/>, document.getElementById("root"));
}