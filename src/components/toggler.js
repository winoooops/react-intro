import React from 'react'

class Toggler extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.handler()
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          {this.props.state ? "Log Out" : "Log In"}
        </button>
      </div>
    )
  }
}

export default Toggler