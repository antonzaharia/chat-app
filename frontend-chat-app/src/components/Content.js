import React, { Component } from 'react'
import { create } from '../actions/MessagesActions'
import { connect } from 'react-redux'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" }
    }
    // openConnection() {
    //     return new WebSocket("ws://localhost:3000/cable")
    // }
    handleChange = event => {
        this.setState({input: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
        const message = { content: this.state.input, conversation_id: 1}
        this.props.create(message)
        this.setState({ input: ""})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.input} onChange={this.handleChange}/>
                <button type="submit">Send</button>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    create: message => dispatch(create(message))
})
export default connect(null, mapDispatchToProps)(Content)