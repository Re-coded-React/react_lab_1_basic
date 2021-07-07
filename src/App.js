import logo from "./logo.svg";
import "./App.css";
import EmployeeInfo from "./components/EmployeeInfo.jsx";
import Profile from "./components/Profile.jsx";
import Dform from "./components/Dform.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <EmployeeInfo name="kodo" job="dev" />
      <Profile
        sssrc="../../public/logo192.png"
        ttt="kodo"
        jj="yakam"
        linnk="www.facebook.com/kodoking99"
      />
      <Dform></Dform>
    </div>
  );
}

export default App;
