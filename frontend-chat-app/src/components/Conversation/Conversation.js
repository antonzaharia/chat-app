import React, { Component } from "react";
import { Div } from "atomize";
import { create } from "../../actions/MessagesActions";
import { connect } from "react-redux";
import { Input, Button } from "atomize";
import Messages from "../Message/Messages";
import {
  loadConversations,
  markAsSeen,
} from "../../actions/ConversationActions";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  findConversation = () => {
    return this.props.conversations.find(
      (c) => c.id === parseInt(this.props.match.params.id)
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const message = {
      content: this.state.input,
      conversation_id: this.props.match.params.id,
      user_id: this.props.user.id,
    };
    if (this.state.input.length > 0) {
      this.props.create(message);
      this.setState({ input: "" });
    }
  };
  handleReceivedMessages = (data) => {
    this.props.loadConversations(this.props.user.id);
    this.props.receiveMessage(data);
  };

  render() {
    return (
      <Div w="100%">
        <Div
          p={{ x: "1rem", y: "0.75rem" }}
          w="100%"
          h="400px"
          border="1px solid"
          borderColor="gray400"
          d="flex"
          flexDir="column-reverse"
          overflow="auto"
        >
          <Messages
            receiveMessage={this.props.receiveMessage}
            messages={
              this.findConversation()
                ? this.findConversation().messages
                : [{ id: 0, content: "No Messages" }]
            }
            user={this.props.user}
            loadConversations={this.props.loadConversations}
          />
        </Div>
        <Div>
          <form onSubmit={this.handleSubmit} className="message-form">
            <Input
              placeholder="Enter a message"
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
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
const mapDispatchToProps = (dispatch) => ({
  create: (message) => dispatch(create(message)),
  loadConversations: (userId) => dispatch(loadConversations(userId)),
  receiveMessage: (message) =>
    dispatch({ type: "RECEIVE_MESSAGE", payload: message }),
  markAsSeen: (user, conversation) => dispatch(markAsSeen(user, conversation)),
});
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  conversations: state.conversations.userConversations,
});
export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
