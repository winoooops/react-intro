import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import List from './components/list'
import TodoForm from './components/todo-form'
import NavBar from './components/layouts/navbar'


let todos = [
  { id: 1, event: "Angular Review" },
  { id: 2, event: "React Note Recap" },
  { id: 3, event: "Git submodule tut" }
]




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos }
    this.addEventHandler = this.addEventHandler.bind(this)
  }

  addEventHandler(item) {
    todos.push({ id: todos.length + 1, event: item })
    this.setState(todos)
  }



  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Welcome name="Will"></Welcome>
        <List list={this.state.todos}></List>
        <TodoForm addTodo={this.addEventHandler}></TodoForm>
      </div>
    );
  }
}

export default App;
