import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createConversation } from '../actions/ConversationActions'

class ConversationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: ""
        }
    }
    handleChange = (event) => this.setState({ emailInput: event.target.value })
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createConversation(this.state.emailInput)
        this.setState({ emailInput: "" })
    }
    render() {
        return (
            <div>
                <p>Start New Conversation</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.emailInput} name="emailInput" placeholder="Enter and email"/>
                    <input type="submit" value="Start New Conversation" />
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    createConversation: email => dispatch(createConversation(email))
})
export default connect(null, mapDispatchToProps)(ConversationForm)