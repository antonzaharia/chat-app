import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createConversation } from '../actions/ConversationActions'

class ConversationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            message: ""
        }
    }
    handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
    handleSubmit = (event) => {
        event.preventDefault()
        const data = {userId: this.props.user.id, email: this.state.emailInput, message: this.state.message}
        this.props.createConversation(data)
        this.setState({ emailInput: "", message: "" })
    }
    render() {
        return (
            <div>
                <p>Start New Conversation</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.emailInput} name="emailInput" placeholder="Enter and email"/>
                    <input type="text" onChange={this.handleChange} value={this.state.message} name="message" placeholder="Enter a Hello message" />
                    <input type="submit" value="Start New Conversation" />
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    createConversation: email => dispatch(createConversation(email))
})
const mapSateToProps = state => ({
    user: state.user.currentUser
})
export default connect(mapSateToProps, mapDispatchToProps)(ConversationForm)