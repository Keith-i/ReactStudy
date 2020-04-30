import React, { Component } from 'react'

class child2 extends Component {
 
  constructor() {
    super()
    this.input2 = React.createRef()
    this.state = {
      input2: 0
    }
  }

  componentDidMount() {
    this.setState({
      input2: this.props.money * 7
    })
  }

  changeHandler = (e) => {
    this.setState({
      input2: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.money * 7}</p>
        <input type="text" ref={ this.input2 } value={this.state.input2} onChange={ this.changeHandler } />
      </div>
    )
  }
}

export default child2
