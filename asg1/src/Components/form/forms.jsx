import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
            <form>
                
  <input type="text" placeholder="Title"/><br></br>
  <input type="text" placeholder="Name"/><br/>
  <input type="text" placeholder="Email"/><br/>
  <input type="text" placeholder="Phone"/><br/>
  <input type="text" placeholder="Address"/><br/>
  <input type="text" placeholder="Message"/><br/>

  <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

