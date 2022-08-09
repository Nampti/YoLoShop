import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import GlobalStyles from '../src/components'
// import styles from '../src/sass/grid.module.scss';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);