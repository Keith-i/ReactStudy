import React, { Component } from 'react'

class ifDemo extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      names: []
    }
  }
  login = () => {
    this.setState({
      isLogin: true,
      names: ['xiaoming', 'xiaohong']
    })
  }
  /**
   * 常用的应用常见：
   * 1.对视图条件进行切换
   * 2.做缺省值
   */
  render() {

    const { names } = this.state
    let showView = this.state.isLogin ? <div>在线</div> : <div>请登录</div>

    return (
      <div>
        条件渲染：{ showView }
        <button onClick={ this.login }>登录</button>
        {
          names.length > 0 ?
          <div>
            {
              names.map((item, index) => {
                return <p key={index}>{item}</p>
              })
            }
          </div>
          :
          <div>请等待，数据正在请求......</div>
        }
      </div>
    )
  }
}

export default ifDemo
