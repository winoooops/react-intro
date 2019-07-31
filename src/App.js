import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import List from './components/list'
import TodoForm from './components/todo-form'

function App() {
  return (
    <div className="App">
      <Welcome name="Will"></Welcome>
      <List></List>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;
