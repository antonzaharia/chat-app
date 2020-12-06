import React from 'react'
import Message from './Message'
import { ActionCableConsumer } from "react-actioncable-provider";

export default function Messages({messages}) {
    const sortedMessages = messages.sort( (a,b) => new Date(b.created_at) - new Date(a.created_at))
    const handleReceivedMessages = () => {
        console.log("Message:");
      };
    return (
        <>
            {sortedMessages.map( message => <Message key={message.id} message={message}/>)}
            <ActionCableConsumer
            channel={{
              channel: "MessagesChannel",
              conversation_id: messages[0].conversation_id,
            }}
            onReceived={handleReceivedMessages}
          />
        </>
    )
}
