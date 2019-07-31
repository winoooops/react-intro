import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import List from './components/list'


function App() {
  return (
    <div className="App">
      <Welcome name="Will"></Welcome>
      <List></List>
    </div>
  );
}

export default App;
