import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App'; // Make sure this path is correct
import './styles/styles.css';

// Proper initialization for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);