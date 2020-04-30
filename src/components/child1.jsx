import React, { Component } from 'react'

class child1 extends Component {

  constructor() {
    super()
    this.input1 = React.createRef()
    this.state = {
      input1: 0
    }
  }

  componentDidMount() {
    this.setState({
      input1: this.props.money
    })
  }

  changeHandler = (e) => {
    this.setState({
      input1: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.money}</p>
        <input type="text" ref={ this.input1 } value={this.state.input1} onChange={ this.changeHandler } />
      </div>
    )
  }
}

export default child1