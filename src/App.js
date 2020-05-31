import React from 'react';
import './App.css';
import InputField from "./components/InputField";
import DetailedView from "./components/DetailedView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
        <InputField className={"input-field"}></InputField>
          <DetailedView>Item Details: </DetailedView>
      </header>
    </div>
  );
}

export default App;
