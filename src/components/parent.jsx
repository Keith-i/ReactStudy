import React, { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'

class parent extends Component {

  render() {
    return (
      <div>
        parent
        Child: <Child1 />
        Child: <Child2 />
      </div>
    )
  }
}

export default parent