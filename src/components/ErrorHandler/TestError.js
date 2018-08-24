import React, { Component } from 'react'

export class TestError extends Component {
  componentDidMount() {
    throw new Error('Testing error build 0.1!')
  }
  render() {
    return (
      <div>
        Hehee
      </div>
    )
  }
}

export default TestError
