import React from 'react'

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      <p> A Vulunerbility found, please change you password </p>
    </div>
  )
}






class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState({ showWarning: !this.state.showWarning })
  }

  render() {
    let text = ''
    if (this.state.showWarning) {
      text = "ignore alert"
    } else {
      text = "show alert"
    }



    return (
      <div>
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        <button onClick={this.handleToggleClick}>
          {text}
        </button>
      </div>
    )
  }


}

export default Notification