import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    addTest,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters,
    getTest,
    postTest,
    removeTest
} from "./redux/action.js"
class Inbox extends Component {
    static propTypes = {
        test: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              age:PropTypes.number.isRequired,
            }).isRequired
        ).isRequired,
        onClick: PropTypes.func.isRequired,
        onTest: PropTypes.func.isRequired,
        onRemoveClick: PropTypes.func.isRequired,
    }
    componentWillMount() {
        let id = 23
        this.props.onTest({id:id}) //发送get请求
    }
    render(){
        return (
            <div>
                <ul>
                    {this.props.test.map((todo,index) => (
                        <li
                            key ={index}
                        >
                            {todo.name}
                        </li>
                    ))}
                </ul>
                <button
                    onClick = {() =>this.props.onClick({name:'sj',age:18})}
                >test</button>
                <button
                    onClick = {() =>this.props.onRemoveClick(1)}
                >删除</button>
            </div>
          );
    }
    
}


const mapStateToProps  = state => {
    console.log(state)
    return {
        test : state.test
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClick: text => {
            dispatch(addTest(text))
        },
        onTest: (id) => {
            dispatch(postTest(id))
        },
        onRemoveClick: (id) => {
            dispatch(removeTest(id))
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inbox)

