import React, { Component } from 'react'
import { connect } from "react-redux"
import { load } from "../actions/ConversationsActions"

class Conversations extends Component {
    renderConversations = () => {
        this.props.conversations.map( c => <p>conversation</p>)
    }
    render() {
        return (
            <div>
                {/* {this.props.user ? this.props.load(this.props.user) : ""} */}
                {/* {this.props.conversations ? "" : ""} */}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    load: user => dispatch(load(user))
})
const mapStateToProps = state => ({
    user: state.user.currentUser,
    conversations: state.conversations
})
export default connect(mapStateToProps, mapDispatchToProps)(Conversations)
