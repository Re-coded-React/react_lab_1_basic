import React, { Component } from "react";

export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  handle = (event) => {
    this.setState({ name: event.target.value });
  };
  alert = (event) => {
    alert("Hello I am fayza");
  };
  consoleLog = (event) => {
    console.log("Hello I am fayza");
  };

  copyTxt = (event) => {
    alert("I am copied");
  };

  great = (event) => {
    alert("Great Great");
    console.log("Great Great");
    console.log(event.type);
    console.log(event.target);
    console.log(event.preventDefault());
  };
  render() {
    return (
      <div>
        <button onClick={this.alert}>Alert</button> <br />
        <button onClick={this.consoleLog}>consoleLog</button>
        <br />
        <input type="text" onChange={this.handle} />
        <br />I am a button Change me <button>{this.state.name}</button>
        <br />
        <input onCopy={this.copyTxt} value="hello"></input>
        <br />
        <button onClick={this.great}>
          Say great to me and tell me type+target in console!!
        </button>
        <br />
      </div>
    );
  }
}
