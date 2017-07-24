import React from 'react';
import {History} from 'react-router';
import style from '../css/componentButton.css';
var Button=React.createClass({
  render(){
    return(
      <button>{this.props.value}1</button>
    )
  }
})


module.exports=Button;
