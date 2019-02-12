import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { clicksNr: 1 }
  }

  render() {
    return (
      <div
        style={{ height: '100px', width: '300px', backgroundColor: '#d32f2f' }}
      >
        <button
          onClick={() => {
            this.setState({ clicksNr: this.state.clicksNr + 1 })
            alert(
              `Hey from the class with state. Number of clicks: ${
                this.state.clicksNr
              }`
            )
          }}
        >
          {this.props.text}
        </button>
      </div>
    )
  }
}
