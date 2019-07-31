import React from 'react'

const todos = [
  { id: 1, event: "Angular Review" },
  { id: 2, event: "React Note Recap" },
  { id: 3, event: "Git submodule tut" }
]



class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos }
  }

  render() {
    const todos = this.state.todos
    return (
      <ul>
        {
          todos.map(todo =>
            <li key={todo.id}>
              {todo.event}
            </li>
          )
        }
      </ul>
    )
  }
}

export default List