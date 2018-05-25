import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { Button } from 'antd';
import 'antd/dist/antd.css';
class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Button type="primary">Primary</Button>
                Home
            </div>
        )
    }
}
export default Home