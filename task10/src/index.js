import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore} from "redux";
import {posts} from "./reducers";

const store = createStore(posts);

ReactDOM.hydrate(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

