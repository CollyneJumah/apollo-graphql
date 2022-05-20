import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient,InMemoryCache,gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  caches: new InMemoryCache()
})

//const client
client
.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
  }
  `
})
.then(result => console.log(result))


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
