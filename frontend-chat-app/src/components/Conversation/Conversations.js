import { Div, Notification } from "atomize";
import React, { Component } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { connect } from "react-redux";
import {
  loadConversations,
  markAsSeen,
} from "../../actions/ConversationActions";
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
    this.props.loadConversations(this.props.user.id);
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
          <div key={c.id}>
            <ConversationLink
              conversation={c}
              user={this.props.user}
              markAsSeen={this.props.markAsSeen}
            />
          </div>
        ))}
        <Notification
          bg="success700"
          isOpen={showNotification}
          onClose={() => this.setState({ showNotification: false })}
        >
          You have a New Conversation!
        </Notification>
      </Div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadConversations: (userId) => dispatch(loadConversations(userId)),
  markAsSeen: (user, conversation) => dispatch(markAsSeen(user, conversation)),
});
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
