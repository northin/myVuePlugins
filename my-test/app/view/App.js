import React, { Component } from 'react';

import { BrowserRouter, Route,Link } from 'react-router-dom'

import MyLayout from "@comp/myLayout.js"
import MyHeader from "@comp/MyHeader.js"
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <MyHeader></MyHeader>
                <MyLayout>{this.props.children}</MyLayout>
                {/*  */}
            </div>
        )
    }
}
export default App