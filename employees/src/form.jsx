import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <h1>form</h1>
                <input type="text" placeholder='enter name'/>
                <input type="text" placeholder='enter email'/>
                <input type="text" placeholder='enter phone'/>
                <input type="text" placeholder='enter address'/>
                <input type="message" placeholder='message'/>
                <input type='submit'/>
            </div>
        )
    }
}
