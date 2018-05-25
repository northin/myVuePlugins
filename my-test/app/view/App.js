import React, { Component } from 'react';

import { BrowserRouter, Route,Link } from 'react-router-dom'

import { MyHeader } from "@comp/myHeader.js"
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <MyHeader />
                <ul>
                    <li><Link to="/about">about</Link></li>    
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default App