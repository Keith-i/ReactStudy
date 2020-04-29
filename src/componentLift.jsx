import React, { Component } from 'react'

class ComponentLift extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  changeHandler = () => {
    this.setState({
      count: this.state.count += 1
    })
  }

  clickChildChange = () => {
    this.props.clickChanges('我是子数据')
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <span>生命周期函数：{ count } - { this.props.title }</span>
        <button onClick={ this.changeHandler }>修改</button>
        <button onClick={ this.clickChildChange }>子改变父的title值</button>
      </div>
    )
  }
}

export default ComponentLift