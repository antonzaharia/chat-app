import { Div } from 'atomize'
import React, { Component } from 'react'
import ConversationLink from './ConversationLink'

class Conversations extends Component {

    render() {
        return (
            <Div pos="fixed" left="0" top="100px">
                {this.props.conversations.map( c => <ConversationLink key={c.id} conversation={c} />)}
            </Div>
        )
    }
}
export default Conversations
