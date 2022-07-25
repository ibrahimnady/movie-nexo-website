import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

