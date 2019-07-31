import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import List from './components/list'
import TodoForm from './components/todo-form'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Welcome name="Will"></Welcome>
        <List></List>
        <TodoForm></TodoForm>
      </div>
    );
  }
}

export default App;
