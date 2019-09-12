import React, { Component } from "react";
import SelectAutoComplete from "./components/SelectAutoComplete";
import Avatar from "./components/Avatar/index";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Ben", email:'ben@gmail.com' },
        { name: "Mark", email:'mark@gmail.com' },
        { name: "James", email:'james@gmail.com' },
        { name: "Jason", email:'jason@gmail.com' },
        { name: "Joe", email:'joe@gmail.com' }
      ]
    };
  }

  // update = flag => {
  //   if (flag) this.setState({ message: "Complete!" });
  // };
  render() {
    return (
      <div>
      <div className="row ">
        <form className="center">
        <select>
          <option></option>
          {this.state.items.map(item => (
            <option name={item.name}>
              <Avatar src={''} alt={item.name}></Avatar>
            </option>
          ))}
        </select>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
