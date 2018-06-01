import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'
import router from "./router/index.js"
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from "@redux/reducers/reducers.js"

const loggerMiddleware = createLogger()
function configureStore(preloadedState) {
    return createStore(
      todoApp,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
}
let store =  configureStore()
render(
        (router)
    ,
    document.getElementById('root')
);