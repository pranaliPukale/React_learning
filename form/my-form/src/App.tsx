import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './Component/NavComponent';
import UserForm from './Component/UserForm';
import WebRoute from './WebRoute';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavComponent />
      <WebRoute/>
      {/* <UserForm/> */}
    </div>
  );
}

export default App;
