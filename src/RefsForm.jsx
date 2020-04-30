import React, { Component } from 'react'

class RefsForm extends Component {

  constructor() {
    super()
    this.username = React.createRef()
  }

  inputClick = (e) => {
    console.log(this.username.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.username} />
        <button onClick={this.inputClick}>点击</button>
      </div>
    )
  }
}

export default RefsForm
