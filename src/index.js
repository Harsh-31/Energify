import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { ApolloClient,
  InMemoryCache, ApolloProvider,
   } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = "151185718631-la49m2emq20ihorgdg0pmdk0h77998j3.apps.googleusercontent.com";

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});


const aspclient = new ApolloClient({
  uri: 'https://localhost:5001/graphql',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientId}>
  <BrowserRouter>
  <ApolloProvider client={aspclient}>
    <App/>
    </ApolloProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
