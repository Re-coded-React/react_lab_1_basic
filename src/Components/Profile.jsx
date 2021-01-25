import React from 'react'
import logo from '../logo.svg';

export default function Profile() {
    return (
        <div>
            <img src={logo} style={{width:50,height:50,display:'inline'}}/>
            <p>Title: <span> Programmer </span></p> 
            <p>Job description: <span> working on progrmming web apps and android/ios apps</span></p>
            <p>You Can Find Me On : <a href="/">Facebook</a> <a href="/">Instegrm</a></p>
        </div>
    )
}
