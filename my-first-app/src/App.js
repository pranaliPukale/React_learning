import logo from './logo.svg';
import './App.css';

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
      <div>
       <h1 id='h1'>About me:</h1>
       <ul >
        <li class="l">Name:Pranali Pukale</li>
        <li class="l">Graduation:MSC(Comp)</li>
        <li class='l'>Native Place:Pandharpur</li>
       </ul>
     </div>
      
    
    </div>
  );
}

export default App;
