import React, { Component } from 'react'

export default class Comp extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increments = () => {
        const newCount = this.state.count+1;
        this.setState({count: newCount})
    }
    render() {
        return (
            <div>
               <button onClick={this.increments}>{this.state.count}</button> 
            </div>
        )
    }
}
