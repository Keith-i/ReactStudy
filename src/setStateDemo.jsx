import React, { Component } from 'react'

class setStateDemo extends Component {
  constructor() {
    super()
    this.state = {
      counts: 0,
      counts2: 10
    }
  }

  async increment() {
    this.setState({
      counts: this.state.counts + 1
    }, () => {
      console.log(this.state.counts, '同步获取')
    })
    console.log(this.state.counts, '异步获取')
    await this.incrementAsync({ counts2: this.state.counts2 + 1 })
    console.log(this.state.counts2, 'Promise方式同步')
  }
  
  incrementAsync = (state) => {
    return new Promise((resolve, reject) => {
      this.setState(state, () => {
        resolve()
      })
    })
  }

  render() {
    return (
      <div>
        <p>setStateDemo是同步还是异步问题</p>
        <p>{ this.state.counts } { this.state.counts2 }</p>
        <button onClick={this.increment.bind(this)}>修改</button>
      </div>
    )
  }
}

export default setStateDemo