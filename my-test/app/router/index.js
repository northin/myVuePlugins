import React, { Component } from 'react';
import {Switch,Router, Route, } from "react-router"
import { Redirect,BrowserRouter,Link } from 'react-router-dom'

import App from "@view/App.js"
import About from "@view/About.js"
import Home from "@view/Home.js"
import NoFund from "@view/NoFund.js"



const router =
<BrowserRouter>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoFund} /> 
        </Switch>
    </App>
</BrowserRouter>
export default router