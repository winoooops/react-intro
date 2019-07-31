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
    this.state = { todos: todos, isLogged: false }
    this.addEventHandler = this.addEventHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
  }

  addEventHandler(item) {
    todos.push({ id: todos.length + 1, event: item })
    this.setState({ todos: todos, user: this.state.isLogged })
  }

  loginHandler() {
    this.setState({ todos: this.state.todos, isLogged: !this.state.isLogged })
  }



  render() {
    return (
      <div className="App">
        <ButtonAppBar isLogged={this.state.isLogged} toggle={this.loginHandler}></ButtonAppBar>
        <Welcome name="Will" isLogged={this.state.isLogged}></Welcome>
        <List list={this.state.todos}></List>
        <TodoForm addTodo={() => { return this.addEventHandler }}></TodoForm>
      </div>
    );
  }
}

export default App;
