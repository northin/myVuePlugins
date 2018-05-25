import React, { Component } from 'react';
import Test from "./test.js"
import Inbox from "./Inbox.js"

import './App.css';
const user = {
  a:"asd",
  b:"s"
}
const element = <h2 className={(user.a)}>{ getName('you') }</h2>  
// Babel 将JSX编译成 React.createElement() 调用。
function getName(name){
  return new Date() + name
}
const element2 = React.createElement(
  "h2",
  {className:(user.b)},
  getName('you')
)

function Welcome (props){   //所有 React 组件都必须是纯函数，并禁止修改其自身 props 。
  return <div>{ props.name }</div>
} 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {route:''}
  }
  getInitialState() {
    return {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = Test; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Inbox;
    }

    return (
      <div>
        <ul>
          <li><a href="#/about">Test</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    );
  }
}

export default App;
