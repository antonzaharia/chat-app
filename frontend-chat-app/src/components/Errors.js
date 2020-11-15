import React, { Component } from 'react'
import Error from "./Error"

export default class Errors extends Component {
    render() {
        const errors = this.props.errors
        const renderErrors = () => {
            if(errors){
                errors.map(error => <Error content="error"/>)
            }
        }
        return (
            <div>
                {renderErrors}
            </div>
        )
    }
}
