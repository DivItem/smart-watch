import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import $ from 'jquery';
import App from './App.jsx';
import './assets/css/linearicons.css';
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.css';
import './assets/css/animate.min.css';
import './assets/css/main.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
