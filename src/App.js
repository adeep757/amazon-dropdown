import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import SelectAutoComplete from "./components/SelectAutoComplete";
import Avatar from "./components/Avatar/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Incomplete!",
      items: [
        { name: "Ben" },
        { name: "Ben" },
        { name: "Ben" },
        { name: "Ben" },
        { name: "Ben" }
      ]
    };
  }

  update = flag => {
    if (flag) this.setState({ message: "Complete!" });
  };
  render() {
    return (
      <div className="center">
        <select>
          <option></option>
          {this.state.items.map(item => (
            <option name={item.name}>
              <Avatar src={''} alt={item.name}></Avatar>
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
