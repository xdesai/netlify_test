import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xander test app for JAMStack and serverless
        </p>
        <p>Go to <a href="/.netlify/functions/xander_go_test">/.netlify/functions/hello-lambda</a> to see the function in action</p>
      </header>
    </div>
  );
}

export default App;
