import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { StoreContext } from 'redux-react-hook';

import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './reducers';

import 'typeface-roboto';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    /* eslint-disable-next-line no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const render = () => {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.Fragment>,
    document.getElementById('root'),
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
