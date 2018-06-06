import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'
import MyRouter from "./router/index.js"
import 'antd/dist/antd.css';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from "@redux/reducers/reducers.js"
import './assets/less/common.less'
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
      <MyRouter />
    ,
    document.getElementById('root')
);