import React from "react";
import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';
import {createStore} from "redux";
import reducers from "./reducers/reducer";
import {Provider} from 'react-redux';
import Home from "./components/Pages/Home";
// import {Router,Route,Routes } from "react-router-dom";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        <App/>
     
    </Provider>,
    document.getElementById('root')
);
