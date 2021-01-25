import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <center>
                <label for="title">Title</label><br></br>
                <input id="title" type="text"></input><br></br>
                <label for="name">name</label><br></br>
                <input id="name" type="text"></input><br></br>
                <label for="email">email</label><br></br>
                <input id="email" type="email"></input><br></br>
                <label for="phone">phone</label><br></br>
                <input id="phone" type="number"></input><br></br>
                <button type="submit">Submit</button><br></br>
                </center>
            </div>
        )
    }
}
