import React from 'react'
// import { Router,Route} from 'react-router';
import {Router,Route,Link,hashHistory} from 'react-router';
import {render} from 'react-dom';
import  style from '../css/home.css';
// import App from './app.jsx';
import history from 'history';
var Button=require('../component/button.jsx');
var Home = React.createClass({
  render() {
    return (
      <div>
        <ul>
        <li><Button value='组件button'/></li>
        <li><Link to='/about'>关于</Link></li>
        <li><Link to='/author'>作者</Link></li>
        </ul>
      </div>
    )
  }
})

var About = React.createClass({
  render() {
    return (
      <div>
      eccentric
      </div>
    )
  }
})

  module.exports = Home;
