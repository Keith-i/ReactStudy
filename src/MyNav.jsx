import React, { Component } from 'react'

// props不可以被修改
class MyNav extends Component {
  render() {
    console.log(this.props.title)
    let cc = []
    this.props.nav.forEach((item, index) => {
      cc.push(<li key={index} title={this.props.title}>{item}+方法1</li>)
    })
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {
            this.props.nav.map((item, index) => {
              return <li key={index} title={this.props.title}>{item}</li>
            })
          }
          {cc}
        </ul>
      </div>
    )
  }
}

export default MyNav