import React, { Component } from 'react';
import { Button } from 'antd';
import '@less/common.less'
class MyTitle extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="myTitle-top">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}
export default MyTitle