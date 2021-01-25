import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <h2>Please fill this form</h2>
                <form>
                    <label>Name : </label>
                    <input type="text"/><br/>
                    <label>Email : </label>
                    <input type="email"/><br/>
                    <label>Phone : </label>
                    <input type="number"/><br/>
                    <label>Address : </label>
                    <input type="textarea"/><br/>
                    <label>Message : </label>
                    <textarea name="message" rows="10" cols="30"></textarea>
                    <br/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
