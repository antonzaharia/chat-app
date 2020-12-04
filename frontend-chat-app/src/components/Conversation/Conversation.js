import React, { Component } from "react";
import { Div } from "atomize";
import { create } from '../../actions/MessagesActions'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { Input, Button } from "atomize";

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: ""
        }
    }
    handleChange = event => {
        this.setState({input: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
        const message = { content: this.state.input, conversation_id: this.props.match.params.id, user_id: this.props.user.id}
        this.props.create(message)
        this.setState({ input: ""})
    }
    handleReceivedMessages = (message) => {
        console.log("Message:", message)
    }
  render() {
    return (
      <Div w="100%">
      <Div
      className="conversation"
        h="100%"
        p={{ x: "1rem", y: "0.75rem" }}
        w="100%"
        h="100%"
        border="1px solid"
        borderColor="gray400"
      >
      {this.props.match.params.id}

        
        <ActionCableConsumer
            channel={{ channel: 'MessagesChannel', conversation_id: this.props.match.params.id }}
            onReceived={this.handleReceivedMessages}
        />
      </Div>
      <Div>
        <form onSubmit={this.handleSubmit} className="message-form">
            <Input placeholder="Enter a message" type="text" 
            value={this.state.input} onChange={this.handleChange}
            suffix={
              <Button
              type="submit"
                pos="absolute"
                bg="info700"
                hoverBg="info800"
                top="0"
                right="0"
                rounded={{ r: "md" }}
              >
                Send
              </Button>
            }
            />
        </form>
      </Div>
      </Div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
    create: message => dispatch(create(message))
})
const mapStateToProps = state => ({
  user: state.user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(Conversation)