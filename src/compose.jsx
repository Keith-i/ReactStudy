import React, { Component } from 'react'

class Compose extends Component {
  render() {
    return (
      <div>哈哈哈：{ this.props.children }</div>
    )
  }
}

export default Compose