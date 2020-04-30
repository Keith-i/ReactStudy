import React, { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'

class parent extends Component {

  constructor() {
    super()
    this.state = {
      money: 1
    }
  }

  changeHandler = (e) => {
    this.setState({
      money: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>parent</p>
        <input type="text" value={this.state.money} onChange={this.changeHandler} />
        人民币: <Child1 money={this.state.money} />
        美元: <Child2 money={this.state.money} />
      </div>
    )
  }
}

export default parent