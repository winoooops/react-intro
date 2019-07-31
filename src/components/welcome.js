import React from 'react'
import MailBox from './mailbox'
import Notification from './notification'


class Welcome extends React.Component {

  render() {
    let title = ''
    if (this.props.isLogged) {
      title = `Hello, ${this.props.name}`
    } else {
      title = `Please login first...`
    }


    return (
      <div>
        <Notification></Notification>
        <h2>{title}</h2>
        <MailBox state={this.props.isLogged}></MailBox>

      </div>
    )
  }
}

export default Welcome