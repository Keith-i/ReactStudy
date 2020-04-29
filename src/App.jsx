import React, { Component } from 'react';
import Home from './Home'
import MyNav from './MyNav'
import StateComponent from './StateComponent'
import ComponentLift from './componentLift'
import SetStateDemo from './setStateDemo'
import IfDemo from './ifDemo'
import KeyDemo from './keyDemo'

// 1、用类的形式创建组件 2、Hook形式
class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: '文本1'
    }
  }

  clickChange = (dd) => {
    console.log(dd)
    // this.setState({
    //   title: dd || '文本2'
    // })
  }

  render() {
    const nav1 = ['首页', '视频', '学习']
    const nav2 = ['WEB', 'Java', 'Node']
    return (
      <div className="App">
        {/* hello react Component
        <Home></Home>
        <MyNav nav={nav1} title="路径导航"></MyNav>
        <MyNav nav={nav2} title="学习导航"></MyNav> */}
        {/* <StateComponent></StateComponent> */}
        <ComponentLift title={ this.state.title } clickChanges={this.clickChange}></ComponentLift>
        <button onClick={ () => {
          this.clickChange(55)
        } }>修改title</button>
        <SetStateDemo></SetStateDemo>
        <IfDemo></IfDemo>
        <KeyDemo></KeyDemo>
      </div>
    );
  }
}

export default App