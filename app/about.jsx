import React from 'react';
import Reflux from 'reflux';
var Home=require('./home.jsx');

const action = Reflux.createActions(["getValue"]);
const stores = Reflux.createStore({
    listenables: [action],
    onGetValue: function (value) {
        this.trigger(value);
    }
});
const About=React.createClass({
  mixins: [Reflux.connect(stores, "value")],
  getInitialState: function () {
    return {
      items: [1,2,3],
      value:1
    };
  },
  createNewItem: function (event) {
   var t=this.state.value+1;
  //  console.log(t);
    action.getValue(t);
  },
  render(){
  // var items = this.state.items;
  // var itemHtml=items.map(function(data){
  //   return <li>{data}</li>;
  // })
    return(
      <div>

       <h2>{this.state.value}</h2>
       <a onClick={this.createNewItem}>点击切换</a>
       <Home/>
      </div>
    )
  }
})

module.exports=About;
