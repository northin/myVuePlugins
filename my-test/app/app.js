import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'
import router from "./router/index.js"
import 'antd/dist/antd.css';

render(
    (router),
    document.getElementById('root')
);