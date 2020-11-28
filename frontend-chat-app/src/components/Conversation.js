import React, { Component } from "react";
import { Div } from "atomize";

export default class Conversation extends Component {
  render() {
    return (
      <Div
      className="conversation"
        h="100%"
        border="1px solid"
        borderColor="gray400"
      >
        {this.props.match.params.id}
      </Div>
    );
  }
}
