import React from 'react';
import './App.css';
import InputField from "./components/InputField";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
          <Logo/>
        <InputField className={"input-field"}></InputField>
      </header>
    </div>
  );
}

export default App;
