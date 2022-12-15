import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollTop />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
