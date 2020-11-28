import { Div } from 'atomize'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

class Conversations extends Component {
    conversationName = (conversation) => {
        let name = ""
        conversation.users ? conversation.users.map( user => name = name + "| " + user.name + " |") : name = "Nothing Here"
        return name
    }
    makeConversationLink = (conversation) => {
        return `/conversations/${conversation.id}`
    }
    render() {
        return (
            <Div>
                {this.props.conversations.map( c => <Link to={this.makeConversationLink(c)} key={c.id}>{this.conversationName(c)}</Link>)}
            </Div>
        )
    }
}
export default Conversations
