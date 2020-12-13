import { Div, Notification } from "atomize";
import React, { Component } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { connect } from "react-redux";
import ConversationLink from "./ConversationLink";

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
    };
  }
  handleReceivedConversation = (conversation) => {
    console.log("New Conversation!", conversation);
    this.setState({ showNotification: true });
  };
  render() {
    const { showNotification } = this.state;

    return (
      <Div>
        <ActionCableConsumer
          channel={{ channel: "ConversationsChannel" }}
          onReceived={this.handleReceivedConversation}
        />
        {this.props.conversations.map((c) => (
          <ConversationLink
            key={c.id}
            conversation={c}
            user={this.props.user}
          />
        ))}
        <Notification
          bg="success700"
          isOpen={showNotification}
          onClose={() => this.setState({ showNotification: false })}
        >
          This notification is self closable
        </Notification>
      </Div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});
export default connect(mapStateToProps)(Conversations);
