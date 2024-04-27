import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";

const root = document.getElementById('root')
root.render(
  <Router>
    <App />
  </Router>
);