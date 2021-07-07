import React, { Component } from "react";

export default class Dform extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>title</h1>
          <table>
            <tr>
              <td>name</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>

            <tr>
              <td>email:</td>
              <td>
                <input type="email"></input>
              </td>
            </tr>

            <tr>
              <td>address</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>

            <tr>
              <td>pass:</td>
              <td>
                <input type="password"></input>
              </td>
            </tr>

            <tr>
              <td>message</td>
              <td>
                <textArea></textArea>
              </td>
            </tr>

            <tr>
              <td>
                <input type="submit"></input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
