import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing out JAMStack and serverless functions
        </p>

        <p>Go to <a href="/.netlify/functions/hello">/.netlify/functions/hello-lambda</a> to see the function in action</p>
      </header>
    </div>
  );
}

export default App;
