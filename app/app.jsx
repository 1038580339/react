import React from 'react';
var Home=require('./home.jsx');
var App = React.createClass({
  render() {
    return (
      <div>
        <h2>都叫你別点了，不听话</h2>
        <Home/>
      </div>
    )
  }
})
module.exports=App;
