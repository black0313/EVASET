import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'
import {Provider} from "react-redux";
import store from "./store";
import './i18next'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
    <Provider store={store}>
        <ToastContainer/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    </Suspense>
  ,
  document.getElementById('root')
);
