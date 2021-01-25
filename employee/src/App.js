import logo from './logo.svg';
import './App.css';
import EmployeeInfo from './components/EmployeeInfo'
import Profile from './components/Profile'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <EmployeeInfo name="Fatima" job="webDev"/>
      <Profile/>
      <Form/>
    </div>
  );
}

export default App;
