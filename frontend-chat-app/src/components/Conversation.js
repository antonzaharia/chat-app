import React, { Component } from "react";
import { Div } from "atomize";
import { create } from '../actions/MessagesActions'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider';

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: "",
            messages: []
        }
    }
    handleChange = event => {
        this.setState({input: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
        const message = { "content": this.state.input, "conversation_id": this.props.match.params.id }
        this.props.create(message)
        this.setState({ input: ""})
    }
    handleReceived = (message) => {
        this.setState({...this.state, messages: [...this.state.messages, message]})
    }
  render() {
    return (
      <Div
      className="conversation"
        h="100%"
        p={{ x: "1rem", y: "0.75rem" }}
        w="100%"
        border="1px solid"
        borderColor="gray400"
      >
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.input} onChange={this.handleChange}/>
            <button type="submit">Send</button>
        </form>
        {this.props.match.params.id}
        <ActionCableConsumer
            channel="ConversationsChannel"
            onReceived={this.handleReceived}
        >
                
        </ActionCableConsumer>
        
      </Div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
    create: message => dispatch(create(message))
})
export default connect(null, mapDispatchToProps)(Conversation)