import React, { Component } from 'react';
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  function WarnBan(props){
      if(!props.show){
          return null
      }
      return <div>banner</div>
  }

  function NumberList(props){
    const list = props.NumberList
    const returnList = list.map((number) => 
        <li key={number.toString()}>
            { number }    
        </li>
    )
    return <ul>{ returnList }</ul>
  }
class Clock extends Component {
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {
            date:new Date(),
            islogin:false,
            isShow:true,
            numberList:[1,2,3,4,5]
        }    //修改state this.setState({comment: 'Hello'});
    }
    // 组件输出被渲染到 DOM 之后运行
    componentDidMount(){
        this.timer = setInterval(()=> this.tick(),1000)
    }
    // 卸载
    componentWillUnMount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }
    handleClick(id){
        console.log(id,this)
    }
    handleLogoutClick(){
        this.setState({
            islogin:false
        })
    }
    handleLoginClick(){
        this.setState({
            islogin:true
        })
    }
    handleToggleClick(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
      return (
        <div onClick={(e) =>this.handleClick(1,e)}>
            <WarnBan show={this.state.isShow} />
            <button onClick={this.handleToggleClick}>{ this.state.isShow?"隐藏":"显示"}</button>
            <ul>
                {
                    this.state.numberList.map((number) => <li key={number+1}>{ number }</li>)
                }
            </ul>
            <div>

                <NumberList NumberList={this.state.numberList}/>
            </div>
            hi {this.state.date.toLocaleTimeString()}   

            {
                this.state.islogin?(
                <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                <LoginButton onClick={this.handleLoginClick} />
                )
            }    
        </div>
      );
    }
  }
  export default Clock;