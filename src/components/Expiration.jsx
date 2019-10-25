import React, { Component } from "react";
//import Button from "./Button";
import "../styles/App.css";

class Expiration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expiration: "00:00"
    };
  }

  handleInput = event => {
    console.log(">>>" + event);

    this.setState({ expiration: event.target.value });
    this.props.onSetExpiry(this.state.expiration);
  };

  state = {};

  render() {
    return (
      <div className="timer">
        <label htmlFor="startTime">Start time: </label>
        <input
          type="time"
          id="startTime"
          value={this.state.expiration}
          onChange={() => this.handleInput}
        ></input>
      </div>
    );
  }
}

export default Expiration;
