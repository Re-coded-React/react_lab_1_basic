import React from 'react'

export default function EmployeeInfoForm() {
    return (
        <div>
            <form action="/">
            <input type="text" placeholder="Name"/>
            <br/>
            <input type="password" placeholder="Password"/><br/>
            <input type="email" placeholder="Email"/><br/>
            <input type="text" placeholder="Address"/><br/>
            <input type="text" placeholder="Message"/><br/>
            <input type="text" placeholder="Phone"/><br/>
            <input type="submit" value="Submit" />

            </form>
        </div>
    )
}
