import React from "react";
import { Div } from "atomize";
import { Link } from "react-router-dom";
import { makeConversationLink } from "../../helpers";

export default function ConversationLink({ user, conversation }) {
  const conversationName = (conversation) => {
    let name = "";
    conversation.users
      ? conversation.users.map(
          (user) => (name = name + "| " + user.name + " |")
        )
      : (name = "Nothing Here");
    return name;
  };

  return (
    <Link key={conversation.id} to={makeConversationLink(user, conversation)}>
      <Div
        className={conversation.seen ? "" : "conversation-not-seen"}
        p={{ x: "1rem", y: "0.75rem" }}
        border="1px solid"
        w="250px"
        borderColor="gray400"
      >
        {conversationName(conversation)}
      </Div>
    </Link>
  );
}
