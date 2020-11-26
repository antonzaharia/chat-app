import React, { Component } from 'react'

export default class Content extends Component {
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
