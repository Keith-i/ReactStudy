import React, { Component } from 'react'

class FormDemo extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  
  handlerSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value)    
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handlerSubmit}>
            <input type="text" value={this.state.value} onChange={this.onChangeHandler} /> {/* 受控组件 */}
            <input type="submit" value="提交"></input>
          </form>
      </div>
    )
  }
}

export default FormDemo