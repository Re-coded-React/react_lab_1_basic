import React from 'react'

export default function EmployeeInfoForm() {
    return (
        <div>
            <form action="/">
            <input type="text" placeholder="Name"/>
            <input type="password" placeholder="Password"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Address"/>
            <input type="text" placeholder="Message"/>  
            <input type="text" placeholder="Phone"/>  
            <input type="submit" value="Submit" />

            </form>
        </div>
    )
}
