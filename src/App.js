import logo from './logo.svg';
import './App.css';
import EmployeeInfo from "./components/EmployeeInfo";
import Profile from "./components/Profile";
import Form from "./components/form";



function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <EmployeeInfo/>
        <Profile/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
