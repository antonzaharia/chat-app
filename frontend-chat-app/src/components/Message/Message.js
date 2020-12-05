import React, { Component } from 'react'
import { connect } from 'react-redux'

class Message extends Component {
    checkUser = () => {
        const { message, user } = this.props
        if (message.user_id === user.id) {
            return "own-message"
        } else { return "other-message"}
    }
    render() {
        const message = this.props.message
        return (
            <div className={this.props.user ? this.checkUser() : "message"}>
                {message.content}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user.currentUser
})
export default connect(mapStateToProps)(Message)
