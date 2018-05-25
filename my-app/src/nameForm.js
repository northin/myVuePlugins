import React, { Component } from 'react';
import NameInput from "./nameInput"
import Button from 'antd/lib/button';
class NameForm extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.state = {
            name:'1',
            password:''
        }
    }
    handleSubmit(){
        console.log(this.state)
    }
    handleChange(type,event){
        console.log(type,event)
        if(type == "name"){
            this.setState({name:event.target.value})
        }else if(type == "pass"){
            this.setState({password:event.target.value})
        }
    }
    handleChange1(value){
        // console.log(value)
        this.setState({name:value})
    }
    render(){
        return (
            <div>
                <form >
                    <NameInput temperature={this.state.name} onTemperatureChange={this.handleChange1} >
                        <span>sjjjjj</span>
                    </NameInput>
                    <div>
                        <label>密码:</label>
                        <input type="text" value={this.state.password}  onChange={(e) =>this.handleChange("pass",e)} />    
                    </div>
                    {/* <input type="button" onClick={this.handleSubmit} /> */}
                    <Button type="primary" onClick={this.handleSubmit}>Button</Button>
                </form>
            </div>
        );
    }
}
export default NameForm;