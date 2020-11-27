import React, { Component } from 'react'
import { create } from '../actions/MessagesActions'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider';
// import Cable from './Cable';   

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: "",
            messages: []
        }
    }
    // openConnection() {
    //     return new WebSocket("ws://localhost:3000/cable")
    // }
    handleChange = event => {
        this.setState({input: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
        const message = { "content": this.state.input, "conversation_id": 1 }
        this.props.create(message)
        this.setState({ input: ""})
    }
    handleReceived = (message) => {
        this.setState({...this.state, messages: [...this.state.messages, message]})
    }
    
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.input} onChange={this.handleChange}/>
                <button type="submit">Send</button>
            </form>
            <ActionCableConsumer
              channel="ConversationsChannel"
              onReceived={this.handleReceived}
            >
                {this.state.messages.map( msg => <p>{ msg.content }</p>)}
            </ActionCableConsumer>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    create: message => dispatch(create(message))
})
export default connect(null, mapDispatchToProps)(Content)