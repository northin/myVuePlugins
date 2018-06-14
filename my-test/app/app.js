import React, { Component } from 'react';
import { render } from 'react-dom';
import MyRouter from "./router/index.js"
import 'antd/dist/antd.css';
import Immutable from 'immutable';
import './assets/less/common.less'


render(
      <MyRouter />
    ,
    document.getElementById('root')
);