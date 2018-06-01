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


const router =
<Provider store={store}>
    <BrowserRouter>
        <App>
            {/* <MyLayout> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/user" component={User} />
                    <Route path="/baseInfo" component={BaseInfo} />
                    <Route path="/user/cread" component={CreadCard} />
                    <Route path="/user/mbChange" component={MbChange} />
                    <Route path="/user/safeQuesSet" component={SafeQuesSet} />
                    <Route path="/info/hisOrderQry" component={HisOrderQry} />
                    <Route path="/info/orderQry" component={OrderQry} />
                    <Route path="/fund/takeMoney" component={TakeMoney} />
                    <Route path="/fund/charge" component={Charge} />
                    <Route component={NoFund} /> 
                </Switch>
            {/* </MyLayout> */}
        </App>
    </BrowserRouter>
</Provider>
export default router