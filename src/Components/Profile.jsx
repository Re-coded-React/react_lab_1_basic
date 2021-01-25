import React from 'react'
import logo from './logo.svg';

export default function Profile() {
    return (
        <div>
            <img src={logo}/>
            <p>Title: <span> Programmer </span></p> 
            <p>Job description: <span> working on progrmming web apps and android/ios apps</span></p>
            <p>You Can Find Me On : <span>Facebook</span> <span>Instegrm</span></p>
        </div>
    )
}
