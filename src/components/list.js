import React from 'react'


class List extends React.Component {
  render() {
    const todos = this.props.list
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