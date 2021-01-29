import logo from './logo.svg';
import './App.css';
import Post from'./components/Post';
import Comp from './components/Comp';
import Tickler from './components/Tickler';

const title = "Mad Max"
const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"]
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React Today</a>
        <em><Post /></em>
        <Post name="fayza"/>
        <Post title={title}  genres={genresArr} />
        <Comp />
        <Tickler />
      </header>
    </div>
  );
}

export default App;
