import React from "react";
import { Div } from "atomize";
import { Link } from "react-router-dom";

export default function ConversationLink({ conversation }) {
  const conversationName = (conversation) => {
    let name = "";
    conversation.users
      ? conversation.users.map(
          (user) => (name = name + "| " + user.name + " |")
        )
      : (name = "Nothing Here");
    return name;
  };
  const makeConversationLink = (conversation) => {
    return `/conversations/${conversation.id}`;
  };
  return (
    <Link to={makeConversationLink(conversation)}>
      <Div
        className="conversation"
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
