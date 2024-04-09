import logo from './logo.svg';
import './App.css';
import User from './user'
function App() {
  return (
    <div className="App">
      {/* <h1>App component</h1> */}
      <User data ={{name:"rahul",age:20}} />
    </div>
  );
}

export default App;
