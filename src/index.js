import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './Menu.js'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1><strong>dev</strong>toolbox</h1>
    <Menu />
  </React.StrictMode>
);
