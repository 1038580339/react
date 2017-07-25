import React from 'react';
import Reflux from 'reflux';
var Home=require('./home.jsx');

const action = Reflux.createActions(["getValue",'getName']);
const stores = Reflux.createStore({
    value:1,
    // listenables: [action],
    init:function(){
      // this.listenTo(action.getValue,'onGetValue');
      // this.listenTo(action.getName,'onGetName');
      //多重寫法
      this.listenToMany(action);
    },
    onGetValue: function (value) {
        this.value=this.value+1;
        this.trigger(this.value);
    },
    onGetName:function(value){
      this.value=this.value-1;
      this.trigger(this.value);
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
  add: function (event) {
    action.getValue();
  },
  reduce:function(){
    action.getName();
  },
  render(){
  // var items = this.state.items;
  // var itemHtml=items.map(function(data){
  //   return <li>{data}</li>;
  // })
    return(
      <div>

       <h2>{this.state.value}</h2>
       <a onClick={this.add}>加</a>
        <a onClick={this.reduce} style={{marginLeft:'20px'}}>减</a>
       <Home/>
      </div>
    )
  }
})

module.exports=About;
