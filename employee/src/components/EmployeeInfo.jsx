import React, { Component } from 'react'

export default class EmployeeInfo extends Component {
    render() {
        return (
            <div>
                <p>name : {this.props.name}</p>
                <p>name : {this.props.job}</p>
            </div>
        )
    }
}
