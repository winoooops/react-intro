import React from 'react'

class Toggler extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggled: true }
    this.toggleHandler = this.toggleHandler.bind(this)
  }

  toggleHandler() {
    this.setState({ isToggled: !this.state.isToggled })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleHandler}>
          {this.state.isToggled ? "Log Out" : "Log In"}
        </button>
      </div>
    )
  }
}

export default Toggler