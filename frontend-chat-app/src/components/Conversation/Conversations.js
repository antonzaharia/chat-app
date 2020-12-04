import { Div } from "atomize";
import React, { Component } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { connect } from "react-redux";
import ConversationLink from "./ConversationLink";

class Conversations extends Component {
    handleReceivedConversation = () => {
        console.log("newConversation")
    }
  render() {
    return (
      <Div>
        <ActionCableConsumer
          channel={{ channel: "ConversationsChannel" }}
          onReceived={this.handleReceivedConversation}
        />
        {this.props.conversations.map((c) => (
          <ConversationLink key={c.id} conversation={c} user={this.props.user} />
        ))}
      </Div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.currentUser
})
export default connect(mapStateToProps)(Conversations);
