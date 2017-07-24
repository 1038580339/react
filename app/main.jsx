var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./home.jsx');
var About=require('./about.jsx');
var Author=require('./author.jsx');
var App=require('./app.jsx');
import {Router, Route,hashHistory} from 'react-router';

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/author' component={Author}/>
      <Route path='/app' component={App}/>
    </Router>
  ), document.getElementById('app')
);
