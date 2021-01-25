import './App.css';
import EmployeeInfo from './Components/EmployeeInfo'
import Profile from './Components/Profile'
import EmployeeInfoForm from './Components/EmployeeInfoForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Here is the Employee Info</h5>
       <EmployeeInfo/>
       <h5>Here is the Employee Profile</h5>

       <Profile/>
       <h5>Here is the Employee Info Form</h5>

       <EmployeeInfoForm/>
      </header>
    </div>
  );
}

export default App;
