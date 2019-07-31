import React from 'react'
import Toggler from './toggler';
import MailBox from './mailbox'
import Notification from './notification'


class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggled: this.props.user }
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
        <Notification></Notification>
        <h2>{title}</h2>
        <Toggler
          handler={this.toggleHandler}
          state={this.state.isToggled}>
        </Toggler>
        <MailBox state={this.state.isToggled}></MailBox>

      </div>
    )
  }
}

export default Welcome