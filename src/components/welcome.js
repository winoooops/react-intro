import React from 'react'
import Toggler from './toggler';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggled: true }
    this.toggleHandler = this.toggleHandler.bind(this)
  }

  toggleHandler() {
    this.setState({ isToggled: !this.state.isToggled })
  }

  render() {
    let title = ''
    if (this.state.isToggled) {
      title = `Hello, ${this.props.name}`
    } else {
      title = `Please login first...`
    }


    return (
      <div>
        <h2>{title}</h2>
        <Toggler
          handler={this.toggleHandler}
          state={this.state.isToggled}>
        </Toggler>
      </div>
    )
  }
}

export default Welcome