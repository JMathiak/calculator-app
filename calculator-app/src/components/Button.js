import React from "react";
import { Component } from "react";
import "./Button.css";
export default class Button extends Component {
  render() {
    return (
      <div
        className={
          "btn " +
          (this.props.isNum === "false" ? "symbol " : "btn ") +
          (this.props.isEqls === "true" ? "equals " : "btn ")
        }
        onClick={() => this.props.handleClick(this.props.value)}
      >
        {this.props.value}
      </div>
    );
  }
}
