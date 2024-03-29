import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore } from 'redux'
import {Provider} from 'react-redux'
import DriverReducer from './reducer/DriverReducer'

const store = createStore(DriverReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
