import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div
        style={{ height: '100px', width: '300px', backgroundColor: '#d32f2f' }}
      >
        <button onClick={() => alert('Hey from the class')}>
          {this.props.text}
        </button>
      </div>
    )
  }
}
