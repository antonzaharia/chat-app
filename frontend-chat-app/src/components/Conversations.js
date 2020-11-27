import { Div } from 'atomize'
import React, { Component } from 'react'

class Conversations extends Component {
    conversationName = (conversation) => {
        let name = ""
        conversation.users ? conversation.users.map( user => name = name + "| " + user.name + " |") : name = "Nothing Here"
        return name
    }
    render() {
        return (
            <Div>
                {this.props.conversations.map( c => <p key={c.id}>{this.conversationName(c)}</p>)}
            </Div>
        )
    }
}
export default Conversations
