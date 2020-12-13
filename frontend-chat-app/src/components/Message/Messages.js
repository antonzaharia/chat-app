import React, { useState } from "react";
import Message from "./Message";
import { ActionCableConsumer } from "react-actioncable-provider";

export default function Messages({ messages, receiveMessage }) {
  const sortedMessages = messages.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  const handleReceivedMessages = (data) => {
    receiveMessage(data);
  };
  const id = messages.length > 0 ? messages[0].conversation_id : 0;
  return (
    <>
      <ActionCableConsumer
        channel={{
          channel: "MessagesChannel",
          conversation_id: id,
        }}
        onReceived={handleReceivedMessages}
      />
      {sortedMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </>
  );
}
