import React, { Component } from 'react';

class form extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="phone" />
                <input type="text" placeholder="address" />  
                 <input type="text" placeholder="message" />

                 <button> submit</button>
            </div>
        );
    }
}

export default form;
