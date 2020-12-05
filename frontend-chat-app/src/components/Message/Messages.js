import React from 'react'
import Message from './Message'

export default function Messages({messages}) {
    const sortedMessages = messages.sort( (a,b) => new Date(b.created_at) - new Date(a.created_at))
    return (
        <>
            {sortedMessages.map( message => <Message key={message.id} message={message}/>)}
        </>
    )
}
