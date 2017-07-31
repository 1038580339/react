import React from 'react';
const Home=require('./home.jsx');

const Author=React.createClass({
  render(){
    return(
      <div>
      <h2>本文来自于Eccentric1111;</h2>
      <Home/>
      </div>
    )
  }
})


module.exports=Author;
