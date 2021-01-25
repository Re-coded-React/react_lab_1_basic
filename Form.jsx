import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                <h1>Form</h1>
                <label htmlFor="">Name</label>
                <input type="text"/>
                <label htmlFor="">email</label>
                <input type="text"/>
                <label htmlFor="">phone</label>
                <input type="text"/>
                <label htmlFor="">Adress</label>
                <input type="text"/>
                <label htmlFor="">Message</label>
                <input type="text"/>
                <button>sumbit</button>


                </form>
                
            </div>
        )
    }
}
