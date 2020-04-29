import React, { Component } from 'react'

class RefsAndDom extends Component {
  constructor() {
    super()
    this.helloDiv = React.createRef()
  }

  componentDidMount() {
    console.log(this.helloDiv.current, 'refs-helloDiv')
    this.helloDiv.current.style.color = 'red'
  }

  render() {
    return (
      <div>
        <div ref={this.helloDiv}>Hello</div>
      </div>
    )
  }
}

export default RefsAndDom