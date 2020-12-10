import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createConversation } from '../../actions/ConversationActions'
import { Input, Button, Div } from "atomize";

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
            <Div w="100%">
                <p m="0 auto">Start New Conversation</p>
                <form onSubmit={this.handleSubmit} w="3rem" >
                    <Input type="text" onChange={this.handleChange} value={this.state.emailInput} name="emailInput" placeholder="Enter email"/>
                    <Input type="text" onChange={this.handleChange} value={this.state.message} name="message" placeholder="Enter a Hello message" />
                    <Button m="0 auto" type="submit" bg="info700" hoverBg="info800" hoverShadow="4">Send</Button>
                </form>
            </Div>
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