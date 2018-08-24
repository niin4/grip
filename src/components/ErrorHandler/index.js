import React, { Component } from 'react'

export class ErrorHandler extends Component {
    state = { error: null, errorInfo: null }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error,
        errorInfo
      })
      if (window.Raven) {
        Raven.captureException(error, { extra: errorInfo })
      }
    }

    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        )
      }
      // Normally, just render children
      return this.props.children
    }
}

export default ErrorHandler
