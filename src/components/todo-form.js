import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { event: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ event: e.target.value })
  }

  handleSubmit(e) {
    alert(`Your todo list has been updated with item: ` + this.state.event)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Thing to do: </label>
        <input type="text"
          value={this.state.event}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default TodoForm