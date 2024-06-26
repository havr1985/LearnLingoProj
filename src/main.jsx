
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.js'
import { BrowserRouter } from 'react-router-dom'
import './firebase.js';
import  { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename='/LearnLingoProj'>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
    <GlobalStyle />
    <Toaster position="top-right" />
  </Provider>
);
