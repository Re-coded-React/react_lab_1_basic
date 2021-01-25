import React, { Component } from 'react'
import mark from './mark.jpg'


export default class Profile extends Component {
    render() {
        return (
            <div>
                <img src={mark} />
                <p>Programmer</p>
                <p>react developer</p>
                <a href="https://www.facebook.com/zuck"></a>
            </div>
        )
    }
}
