import React, { Component } from 'react'

class StateComponent extends Component {
  /** 
   * 组件中的状态：state
   * 以前我们操作页面的元素变化，都是修改Dom，操作DOM
   * 但是我们有了React优秀的框架，我们不再推荐操作DOM，页面元素的改变使用State进行处理
  */
  constructor(props) {
    super(props)
    this.aaa = 'eee'
    this.state = {
      count: 10,
      flag: true
    }
  }

  test() {
    this.aaa = '8848'
  }

  increment() {
    this.setState({
       count: this.state.count += 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count -= 1
    })
  }

  // 使用箭头函数时不需要bind(this)操作
  clickCrement = () => {
    console.log(this.state.count)
  }

  switchBtn = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    let showView = this.state.flag ? '我是孙悟空' : '我是假的孙悟空'
    return (
      <div>
        组件的State
        <p>{this.state.count}</p>
        <button onClick={ this.increment.bind(this) }>增加</button>
        <button onClick={ this.decrement.bind(this) }>减少</button>
        <button onClick={ this.clickCrement }>关于this</button>
        <p>{showView}</p>
        <button onClick={ this.switchBtn }>真假切换</button>
        <p>{this.aaa}</p>
        <button onClick={ this.test }>切换8848</button>
      </div>
    )
  }
}

export default StateComponent