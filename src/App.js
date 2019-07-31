import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Toggler from './components/toggler';

function App() {
  return (
    <div className="App">
      <Welcome name="Will"></Welcome>
      <Toggler></Toggler>
    </div>
  );
}

export default App;
