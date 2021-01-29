import React, { Component } from 'react'

export default class Tickler extends Component {
    tickle = (event) =>{
        console.log('tee tee');
        console.log(event.type);
        console.log(event.target);
                console.log(event.preventDefault());

    }

    render() {
        return (
            <div>
            <button onClick={this.tickle}>Tickle  me!!</button>
            </div>
        )
    }
}
