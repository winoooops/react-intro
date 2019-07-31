import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import List from './components/list'
import TodoForm from './components/todo-form'

const todos = [
  { id: 1, event: "Angular Review" },
  { id: 2, event: "React Note Recap" },
  { id: 3, event: "Git submodule tut" }
]




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos }
  }


  render() {
    return (
      <div className="App">
        <Welcome name="Will"></Welcome>
        <List list={this.state.todos}></List>
        <TodoForm></TodoForm>
      </div>
    );
  }
}

export default App;
