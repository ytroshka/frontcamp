import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

hydrate(<Provider store={store}><App /></Provider>, document.getElementById('root'));