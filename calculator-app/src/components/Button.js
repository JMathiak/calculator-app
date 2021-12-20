import React from "react";
import { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleClick(this.props.value)}>
        {this.props.value}
      </div>
    );
  }
}
