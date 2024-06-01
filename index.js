import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Importing the CSS file for global styles
import App from '.src/App'; // Importing the main App component

// Rendering the App component into the root element in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
