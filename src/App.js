import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import List from './components/list'
import TodoForm from './components/todo-form'
import ButtonAppBar from './components/layouts/navbar'


let todos = [
  { id: 1, event: "Angular Review" },
  { id: 2, event: "React Note Recap" },
  { id: 3, event: "Git submodule tut" }
]




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: todos, user: false }
    this.addEventHandler = this.addEventHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
  }

  addEventHandler(item) {
    todos.push({ id: todos.length + 1, event: item })
    this.setState({ todos: todos, user: this.state.user })
  }

  loginHandler() {
    this.setState({ todos: this.state.todos, user: !this.state.user })
  }



  render() {
    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Welcome name="Will"></Welcome>
        <List list={this.state.todos}></List>
        <TodoForm addTodo={() => { return this.addEventHandler }}></TodoForm>
      </div>
    );
  }
}

export default App;
