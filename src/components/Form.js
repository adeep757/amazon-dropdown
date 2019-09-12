import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Message from "./Message";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      url: "",
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false
    };
  }

  handleChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
    // this.validate();
  };

  validate = () => {
    const { update } = this.props;
    const nameRegEx = /^[A-Za-z ]+$/;
    const emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phoneRegEx = /^[2-9][0-9]{9}$/;
    const urlRegEx = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    const { name, email, phone, url } = this.state;
    const valid =
      name.match(nameRegEx) &&
      (name.length >= 3 && name.length <= 30) &&
      email.match(emailRegEx) &&
      phone.match(phoneRegEx) &&
      url.match(urlRegEx);

    update(valid);
    // if (name.match(nameRegEx) && (name.length >= 3 && name.length <= 30)) {
    //   this.setState({ isNameValid: true });
    // }

    // if (email.match(emailRegEx)) {
    //   this.setState({ isEmailValid: true });
    // }

    // if (phone.match(phoneRegEx)) {
    //   this.setState({ isPhoneValid: true });
    // }

    // if (url.match(urlRegEx)) {
    //   this.setState({ isUrlValid: true });
    // }
  };

  render() {
    const {
      name,
      email,
      phone,
      url,
      isEmailValid,
      isPhoneValid,
      isNameValid,
      isUrlValid
    } = this.state;
    const valid = isEmailValid && isPhoneValid && isUrlValid && isNameValid;

    return (
      <div>
        <div className="row">
          <h1 className="text-center">Form Validation</h1>
          <form>
            <h3>Name:</h3>
            <input
              minLength={3}
              maxLength={30}
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              // className={`form-control ${errorName ? 'is-invalid' : null}`}
              id="InputName"
              aria-describedby="nameHelp"
              placeholder="Enter your name"
            />
            <h3>Email:</h3>
            <input
              value={email}
              onChange={this.handleChange}
              type="email"
              name="email"
              // className={`form-control ${errorEmail ? "is-invalid" : null}`}
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter  your email"
            />
            <h3>Phone:</h3>
            <input
              maxLength={10}
              value={phone}
              onChange={this.handleChange}
              type="text"
              name="phone"
              // className={`form-control ${errorName ? 'is-invalid' : null}`}
              id="InputPhone"
              placeholder="Enter your phone number"
            />
            <h3>Blog URL:</h3>
            <input
              value={url}
              onChange={this.handleChange}
              type="text"
              name="url"
              // className={`form-control ${errorName ? 'is-invalid' : null}`}
              id="InputURL"
              placeholder="Enter your blog URL"
            />
            <div className="small-6 small-centered text-center columns">
              <a
                href="#"
                className="button success expand round text-center"
                onClick={this.validate}
              >
                Verify
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
