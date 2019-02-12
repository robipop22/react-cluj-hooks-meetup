import React, { PureComponent } from 'react'

export default class HoveredClassBtn extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  render() {
    return (
      <button
        style={{
          backgroundColor: this.state.hovered ? '#2E7D32' : '#283593'
        }}
        onMouseEnter={() => {
          this.setState({ hovered: true })
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false })
        }}
      >
        Hover me (I'm a class Btn)
      </button>
    )
  }
}
