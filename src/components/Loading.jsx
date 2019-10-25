import React, { Component } from "react";
import Duration from "./Duration";
import Expiration from "./Expiration";
import CloseWindowButton from "./CloseWindowButton";
import Button from "./Button";

class Input extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      textDisplay: false
    };
  }*/

  state = {
    isDuration: true //false means is expiry time
  };

  ToggleButton = () => {
    this.setState({ isDuration: !this.state.isDuration });
  };

  render() {
    return (
      <div>
        <CloseWindowButton />
        {this.getTimer()}
        <label class="switch">
          <input type="checkbox" onClick={() => this.ToggleButton()} />
          <span class="slider round"></span>
        </label>
        <Button text="START" />
      </div>
    );
  }

  getTimer() {
    if (this.state.isDuration) {
      return <Duration />;
    } else {
      return <Expiration />;
    }
  }
}

export default Input;
