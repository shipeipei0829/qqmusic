import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios'
Component.prototype.$http = axios;
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));