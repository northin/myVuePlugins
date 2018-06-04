import React, { Component } from 'react';
import {Switch,Router, Route, } from "react-router"
import { BrowserRouter,Link } from 'react-router-dom'

import MyLayout from "@comp/myLayout.js"
import MyHeader from "@comp/MyHeader.js"
import User from "@view/User.js"
import About from "@view/About.js"
import Home from "@view/Home.js"
import NoFund from "@view/NoFund.js"
import BaseInfo from '@view/personal/BaseInfo';
import CreadCard from '@view/personal/CreadCard';
import MbChange from '@view/personal/MbChange';
import SafeQuesSet from '@view/personal/SafeQuesSet';
import Charge from '@view/fundManage/Charge';
import TakeMoney from '@view/fundManage/TakeMoney';
import HisOrderQry from '@view/info/HisOrderQry';
import OrderQry from '@view/info/OrderQry';
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <MyHeader></MyHeader>
                <MyLayout>
                    <Switch>
                        <Route exact path="/app" component={Home} />
                        <Route path="/app/about" component={About} />
                        <Route exact path="/app/user" component={User} />
                        <Route path="/app/user/baseInfo" component={BaseInfo} />
                        <Route path="/app/user/cread" component={CreadCard} />
                        <Route path="/app/user/mbChange" component={MbChange} />
                        <Route path="/app/user/safeQuesSet" component={SafeQuesSet} />
                        <Route path="/info/hisOrderQry" component={HisOrderQry} />
                        <Route path="/info/orderQry" component={OrderQry} />
                        <Route path="/fund/takeMoney" component={TakeMoney} />
                        <Route path="/fund/charge" component={Charge} />
                        <Route component={NoFund} /> 
                    </Switch>
                </MyLayout>
                
                    
                        
            </div>
        )
    }
}
export default App