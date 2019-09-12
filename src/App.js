import React, { Component } from "react";
import SelectAutoComplete from "./components/SelectAutoComplete";

import "./index.css";
import List from './components/List/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Ben Stokes", email:'ben@gmail.com' },
        { name: "Mark Pete", email:'mark@gmail.com' },
        { name: "James Corden", email:'james@gmail.com' },
        { name: "Jason Roy", email:'jason@gmail.com' },
        { name: "Joe Root", email:'joe@gmail.com' }
      ]
    };
  }


  render() {
    return (
     
      <div className="container">
       <List list ={this.state.items}></List>
      </div>
 
    );
  }
}

export default App;
