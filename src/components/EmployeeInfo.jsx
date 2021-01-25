import React, { Component } from "react";

export default class EmployeeInfo extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.job}</div>
      </div>
    );
  }
}
