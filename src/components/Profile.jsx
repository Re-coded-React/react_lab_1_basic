import React, { Component } from "react";

export default class profile extends Component {
  render() {
    return (
      <div>
        <image src={this.props.sssrc}></image>
        <h1>{this.props.ttt}</h1>
        <h2>{this.props.jj}</h2>
        <a hraf={this.props.linnk}></a>
      </div>
    );
  }
}
