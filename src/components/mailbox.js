import React from 'react'

const messages = ['react', 're:react', 're:re:React']


class MailBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: messages }
  }

  render() {
    let message = ''
    if (this.props.state) {
      message = <h3>You have {this.state.messages.length} unread messages </h3>
    }


    return (
      <div>
        {this.state.messages.length > 0 &&
          message
        }
      </div>
    )
  }
}

export default MailBox