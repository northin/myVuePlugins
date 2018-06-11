import { Modal, Button } from 'antd';
import React, { Component } from 'react';
class MyModal extends React.Component {
  state = { visible: false }
  componentDidMount(){
    this.props.onRef(this)
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.props.onHandeOK(e)
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.props.onHandeCancel()
    this.setState({
      visible: false,
    });
  }
  render() {
    const title = this.props.title
    return (
      <div>
        <Modal
          title="确认信息"
        //   onShow={}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.props.content}</p>
        </Modal>
      </div>
    );
  }
}

export default MyModal