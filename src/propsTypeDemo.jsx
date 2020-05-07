import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropsTypeDemo extends Component {
  render() {
    return (
        <div>ddd：{ this.props.title }</div>
    )
  }
}

PropsTypeDemo.propTypes = {
  title: PropTypes.string
}

PropsTypeDemo.defaultProps = {
  title: '默认标题'
}

export default PropsTypeDemo