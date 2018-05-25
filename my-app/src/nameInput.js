import React, { Component } from 'react';
class NameInput extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        return (
                <div>

                    <label>姓名:</label>
                    <input type="text" value={temperature} onChange={this.handleChange} />    
                    {this.props.children}
                </div>
        );
    }
}
export default NameInput;