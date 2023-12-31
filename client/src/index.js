import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './rtk/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
);