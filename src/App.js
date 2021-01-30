// import logo from './logo.svg';
// import './App.css';
// import Post from'./components/Post';
// import Comp from './components/Comp';
// import Tickler from './components/Tickler';
// import Event from './components/Event';

// const title = "Mad Max"
// const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"]
 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer" >
//           Learn React Today</a>
//         <em><Post /></em>
//         <Post name="fayza"/>
//         <Post title={title}  genres={genresArr} />
//         <Comp />
//         <Tickler />
//         <Event />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Event from "./components/Event";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Test />
      <Event />
    </div>
  );
}
class Test extends React.Component {
  render() {
    return <div>welcome to task</div>;
  }
}
/*
React lab 1
Overview
Create a react project that has these events.

Requirements
Onclick event - that creates an alert
onChange event - that changes a button content
on click event = that sends a log
on copy event = sends an alert
A random event that you pick be as creative as you can with this one.
Have fun, and Good luck :D */

