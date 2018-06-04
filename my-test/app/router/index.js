import React, { Component } from 'react';
import {Switch,Router, Route, } from "react-router"
import { Redirect,BrowserRouter,Link } from 'react-router-dom'

import App from "@view/App.js"
import User from "@view/User.js"
import About from "@view/About.js"
import Home from "@view/Home.js"
import NoFund from "@view/NoFund.js"
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from "@redux/reducers/reducers.js"
import BaseInfo from '@view/personal/BaseInfo';
import CreadCard from '@view/personal/CreadCard';
import MbChange from '@view/personal/MbChange';
import SafeQuesSet from '@view/personal/SafeQuesSet';
import Charge from '@view/fundManage/Charge';
import TakeMoney from '@view/fundManage/TakeMoney';
import HisOrderQry from '@view/info/HisOrderQry';
import OrderQry from '@view/info/OrderQry';

import Login from '@view/Login'

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

const ProtectPage = props => {
    // 如果没有登录
    console.log(store.getState())
    if (!store.getState().isAuth) {
        return <Redirect to='/login'></Redirect>
    } else {
        return <App {...props}/>
    }
}

class MyRouter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
                <Provider store={store} >
                    <BrowserRouter>
                        <div>
                            <Route path="/login" component={Login} />
                            <Route path="/app" component={ProtectPage} />
                        </div>
                    </BrowserRouter>
                
                </Provider>
        )
    }
}



export default MyRouter