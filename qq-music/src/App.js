import React, { Component } from 'react';
import './App.css';
import Router from './router/index';//路由模板
import AppRoutes from './router/App';//一级路由数组

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router routes={AppRoutes} />
      </div>
    );
  }
}

export default App;
