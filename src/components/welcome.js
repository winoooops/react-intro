import React from 'react'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
      </div>
    )
  }
}

export default Welcome