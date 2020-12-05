import React from 'react'

export default function Messages({messages}) {
    return (
        <>
            {messages.map( message => <p key={message.id}>{message.content}</p>)}
        </>
    )
}
