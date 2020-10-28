import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Amplify from 'aws-amplify';
import rootReducer from './rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const client = new GraphQLClient({
  url: process.env.REACT_APP_DATO_CMS_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATO_CMS_API_TOKEN}`,
  },
});

ReactDOM.render(
  <StrictMode>
    <ClientContext.Provider value={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClientContext.Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
